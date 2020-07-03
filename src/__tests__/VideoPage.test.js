import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import mockSearchVideo from '../__mocks__/mockSearchVideo';
import mockGetVideoInfo from '../__mocks__/mockGetVideoInfo';
import mockGetVideoComments from '../__mocks__/mockGetVideoComments';
import * as api from '../api/service'

jest.mock('react-router-dom', () => {
  const moduloOriginal = jest.requireActual('react-router-dom');
  return {
    ...moduloOriginal,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
    useHistory: () => ({
      push: jest.fn()
    })
  };
})

jest.mock('../api/service');
api.getVideoInfo.mockImplementation(
  () => Promise.resolve(mockGetVideoInfo)
);
api.getVideoComments.mockImplementation(
  () => Promise.resolve(mockGetVideoComments)
);

function renderWithRouter(ui, routeConfigs = {}) {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Funcionalidades Componente Video Page', () => {
  it('Renderiza dados no vídeo na página', async () => {
    const randomVideoID = mockSearchVideo.items[1].id.videoId;

    renderWithRouter(<App />, { route: `/watch/${randomVideoID}` });

    await waitFor(() => expect(api.getVideoInfo).toHaveBeenCalled());
    await waitFor(() => expect(api.getVideoComments).toHaveBeenCalled());

    expect(screen.getByTestId('videoplayer')).toBeInTheDocument();
    expect(screen.getByTestId('videoinfo')).toBeInTheDocument();
    expect(screen.getByTestId('channelinfo')).toBeInTheDocument();
    expect(screen.getByTestId('comments')).toBeInTheDocument();
  })


  it('Vídeo selecionado atualiza os dados do vídeo atual na página', async () => {
    const randomVideoID = mockSearchVideo.items[1].id.videoId;
    const { history } = renderWithRouter(<App />, { route: `/watch/${randomVideoID}` });

    await waitFor(() => expect(api.getVideoInfo).toHaveBeenCalled());
    await waitFor(() => expect(api.getVideoComments).toHaveBeenCalled());
    expect(history.location.pathname).toBe(`/watch/${randomVideoID}`);

    fireEvent.click(screen.getAllByTestId('selectedVideo')[0]);
    await waitFor(() => expect(api.getVideoInfo).toHaveBeenCalled());
    await waitFor(() => expect(api.getVideoComments).toHaveBeenCalled());

    expect(history.location.pathname).not.toEqual(`/watch/${randomVideoID}`)
  })
})