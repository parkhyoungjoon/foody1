import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const LogoImage = styled.div`
    height: 100%;
    width: 50%;
    position: absolute;
    background-color: skyblue;
    background-size: cover;
    background-position: center center;
    background-image: url("./assets/logo.png");
`;
    
const List = styled.ul`
    display: felx;
    list-style: none; 
`;
const Item = styled.li`
    background-color: rgba(0,0,0,0);
    margin-left: 3%;
    margin-top: 1%;
    position: relative;
    left: 50%;
    font-size: 25px;
    font-weight: bold;
    &: hover {
        background-color: #FFDAAB;
    }
`;
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export default withRouter(() => (
    <Container>
        <LogoImage/>
        <List>
            <Item>
                <SLink to="/">이용방법</SLink>
            </Item>
            <Item>
                <SLink to="/search">검색</SLink>
            </Item>
            <Item>
                <SLink to="/">랭킹</SLink>
            </Item>
            <Item>
                <SLink to="/">데이터 구매</SLink>
            </Item>
            <Item>
                <SLink to="/login">로그인</SLink>
            </Item>
        </List>
    </Container>
));

