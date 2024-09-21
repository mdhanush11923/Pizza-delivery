import HistoryIcon from '@mui/icons-material/History';

export default function Orders()  {
  return (
    <div className="flex w-full h-screen px-20 py-10 gap-2 justify-center bg-dark">
      <HistoryIcon />
      <h1>No orders history</h1>
    </div>
  )
}