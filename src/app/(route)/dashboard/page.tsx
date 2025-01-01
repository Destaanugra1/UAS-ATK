import UserTable from '@/app/components/auth/user-table'
import CardProduct from '@/app/components/ui/CardProduct'


const Dashboard = () => {
  return (
    <div className='text-center'>
      <CardProduct />
      <UserTable />
    </div>
  )
}

export default Dashboard