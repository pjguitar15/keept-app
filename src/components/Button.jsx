import styled from 'styled-components'

export const PrimaryButton = styled.button`
  background-color: #ffc107;
  border: none;
  padding: 0.5rem 2rem;
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
  &:hover {
    background-color: #ffd24d;
  }
`
export const SecondaryButton = styled.button`
  background: none;
  border: 1px solid #ffc107;
  padding: 0.5rem 2rem;
  color: #ffc107;
  font-size: 12px;
  letter-spacing: 1px;
  &:hover {
    background-color: #ffc107;
    color: white;
  }
`
