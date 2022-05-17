import React from 'react'
import {QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Employees from './components/Employees';
import EmployeeView from './components/EmployeeView';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
    <h1>Arbetsprov Gisys</h1>
    <Employees />
    </div>
    </QueryClientProvider>
  );
}


export default App;