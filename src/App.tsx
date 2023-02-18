import { useState } from 'react'
import { 
  QueryClientProvider,
  QueryClient,
 } from 'react-query'
import Button from './components/Buttons/Button';
import Input from './components/Fields/Input';
import NewPost from './features/Posts/NewPost';

const client = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={client}>
      <div
      className='
      w-full
      flex
      justify-center
      '>
        <div
        className='
        relative
        flex
        flex-col
        items-center
        w-[500px]
        h-screen
        border-x-[1px]
        '>
          <NewPost/>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
