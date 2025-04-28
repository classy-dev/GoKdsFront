import { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { reset } from 'ComponentsFarm/styles/common';
import { authStore } from 'MobxFarm/store';
import Home from 'PagesFarm/Home';
import Login from 'PagesFarm/Login';
import { Route, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Global } from '@emotion/react';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  const history = useHistory();
  const [, setLoadedStore] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error: any) => {
        if (error.code === '8999') {
          authStore.logOut();
          history.push('/');
        }
      },
    }),
  });

  useEffect(() => {
    authStore.init();
    setLoadedStore(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-center" limit={1} autoClose={300} />
      <Global styles={reset} />
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
