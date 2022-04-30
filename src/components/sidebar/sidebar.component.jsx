import { NavLink } from 'react-router-dom'
import image from '../../avatar.jpg'
import {
  Header,
  Avatar,
  AvatarContainer,
  Nav,
  Sider,
} from './styles/sidebar.styles'

const isActiveClass = ({ isActive }) =>
  isActive
    ? 'font-bold'
    : 'transition duration-150 ease-out hover:translate-x-2 hover:font-bold'

const Sidebar = () => (
  <Sider>
    <AvatarContainer>
      <Avatar src={image} />
      <Header>Aebbie Rontos</Header>
    </AvatarContainer>
    <Nav>
      <NavLink to="/" className={isActiveClass}>
        Hi There! 👋
      </NavLink>
      <NavLink to="employment" className={isActiveClass}>
        Employment 👨‍💼
      </NavLink>
      <NavLink to="education" className={isActiveClass}>
        Education 📑
      </NavLink>
      <NavLink to="contact" className={isActiveClass}>
        Hire me! 💻
      </NavLink>
    </Nav>
  </Sider>
)
export default Sidebar
