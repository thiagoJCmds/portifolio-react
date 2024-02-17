import styled from 'styled-components';

export const TitleSection = styled.h2`
color: ${(props) => props.theme.corPrincipal};

@media (max-width:768px) {
    
    margin-top: 30px;
    font-size: 18px;
}

@media (max-width:928px) and (orientation:landscape){
    font-size: 17px;
    margin-top: 8px;
}
` 


