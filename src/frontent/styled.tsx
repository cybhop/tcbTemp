import styled from "styled-components";



export const Button = styled.button`

`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
export const CardHeader = styled.div`
  padding: 16px;    
`;
export const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin: 0;
`;
export const CardContent = styled.div`
  padding: 20px;
`;  
export const Badge = styled.span`
  display: inline-block;    
  padding: 4px 8px;
  border-radius: 12px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 0.875rem;
`;
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;
export const CardFooter = styled.div`
  padding: 16px;
  background-color: #f7f7f7;
  border-top: 1px solid #eee;
`;
export const CardLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  } 
`;
export const Highlight = styled.span`
  color: #DAA520; /* Gold color */
  font-weight: bold;
`;  
export const Address = styled.address`
  font-style: normal; 
  color: #666;
`;
export const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;  
  &:hover {
    text-decoration: underline;
  }
`;  
export const Input = styled.input`
  width: 100%;  
  padding: 12px 16px;
  border: 1px solid #ccc; 
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  &:focus {

    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;
