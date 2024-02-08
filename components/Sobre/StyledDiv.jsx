import styled from "styled-components";

export const StyledDIv = styled.div`
    display: flex;
    margin-top: 16px;
    margin-bottom: 64px;
    justify-content: space-between;
img{
    height: 180px;
    max-width: 100%; 

    
    
}

@media (max-width:768px) {
    display: block;
    img{
        max-width: 100%;
        height: 100%;
    }
}
`