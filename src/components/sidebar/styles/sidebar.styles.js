import styled from 'styled-components'

const padding = '3.3rem'

export const Sider = styled.div`
  padding: ${padding};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 13rem 1fr;
  background-color: #c8271f;
  color: white;
`
export const AvatarContainer = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
`
export const Avatar = styled.img`
  width: 6em;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  row-gap: 0.5rem;
`
