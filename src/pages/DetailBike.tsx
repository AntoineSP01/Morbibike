import React from "react";
import { Layout, Flex, Popover, Button } from "antd";
import { useState } from "react";
import "../styles/App.css";
import { Bike } from "../models/Bike";
import BikeCard from "../components/BikeCard";
import BikeForm from "../components/BikeForm";

const layoutStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
};

const headerStyle: React.CSSProperties = {
    textAlign: "center",
    width: "100%",
    color: "black",
    fontSize: 25,
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "orange",
};

const { Header, Content, Footer } = Layout;

export default function DetailBike() {
    return (
        <>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Morbibikes</Header>
                <Content>
                    <Flex vertical align="center">
                        <h1>Detail of this Bike</h1>
                    </Flex>
                </Content>
                <Footer>Jacque Pedalo</Footer>
            </Layout>
        </>
    );
}
