import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


const Header = styled.header`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    display:flex;
    padding: 0px 10px;
    background-color: rbga(20, 20, 20, 0.8);
    border-bottom: 1px solid black;
    z-index: 10;
`;
const List = styled.ul`
    display: flex;
`;
const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => (props.current ? "#ffd8a8" : "transparent")};
    transition: border-bottom .5s ease-in-out;
    &:hover {
        background-color: #ffd8a8;
    }
`;
const SLink = styled(Link)`
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Auth  =styled.button`
    border: 1px solid skyblue; 
    background-color: rgba(0,0,0,0); 
    color: skyblue; 
    padding: 5px;
    transition: border-bottom .5s ease-in-out;
    &:hover {
        background-color: skyblue;
    }
    margin-left: 1400px;
`;
export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Dr.Foody</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">제품 검색</SLink>
            </Item>
            <Item current={pathname === "/"}>
                <SLink to="/">이용방법</SLink>
            </Item>
            <Item current={pathname === "/"}>
                <SLink to="/">데이터 구매</SLink>
            </Item>
        </List>
        <Auth>로그인</Auth>
        {/* 
            if user? user logout : Link=/auth/login  
        */}
    </Header>
    ));