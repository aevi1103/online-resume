import styled from 'styled-components'

const padding = '3.3rem'

export const Layout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const Container = styled.main`
  /* justify-self: center; */
  height: 100vh;
  display: grid;
  grid-template-columns: 20rem 60rem;
`

export const Content = styled.div`
  overflow-y: auto;
  padding: ${padding};
`
