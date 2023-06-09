import * as React from 'react';

type Context = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = React.createContext<Context>({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoadingContext;
