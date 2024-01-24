
import Avatar from './components/avatar/Avatar'
import Profile from './components/profile/Profile'
import SkillList from './components/skillList/SkillList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center items-center  w-full min-h-screen' style={{backgroundColor:""}}>
      <Avatar/>
      <Profile/>
      <SkillList/>
    </div>
      
    </>
  )
}

export default App
