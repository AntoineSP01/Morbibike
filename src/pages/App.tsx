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

export default function App() {
    const [bikes, setBikes] = useState<Bike[]>([
        {
            id: 0,
            name: "Giant",
            model: "ATX",
            years: 2019,
            typeOfBike: { id: 0, name: "VTT" },
        },
        {
            id: 1,
            name: "Decathlon",
            model: "Riverside",
            years: 2023,
            typeOfBike: { id: 1, name: "VTC" },
        },
        {
            id: 2,
            name: "Specialized",
            model: "Turbo",
            years: 2022,
            typeOfBike: { id: 0, name: "VC" },
        },
    ]);

    const [bikeToUpdate, setBikeToUpdate] = useState<Bike | undefined>(undefined);

    const generateId = (): number => {
        return bikes.length;
    };

    const handleDelete = (id) => {
        return setBikes(bikes.filter((item) => item.id !== id));
    };

    const handleCreate = (formData) => {
        setBikes([
            ...bikes,
            {
                id: generateId(),
                name: formData.name,
                model: formData.model,
                years: Number(formData.years),
            },
        ]);
    };

    const handleUpdate = (formData) => {
        setBikes(
            bikes.map((bike) => {
                if (bike.id === formData.id) {
                    return {
                        ...bike,
                        name: formData.name,
                        model: formData.model,
                        years: Number(formData.years),
                    };
                } else {
                    return bike;
                }
            })
        );
        setBikeToUpdate(undefined);
    };

    const handleClose = () => {
        setBikeToUpdate(undefined);
    };

    return (
        <>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Morbibikes</Header>
                <Content>
                    <Flex vertical align="center">
                        <h1>List of bikes available</h1>

                        <ul style={{ width: "100%" }}>
                            {bikes.map((bike) => (
                                <BikeCard
                                    key={bike.id}
                                    bike={bike}
                                    onDelete={() => handleDelete(bike.id)}
                                    onUpdate={() => setBikeToUpdate(bike)}
                                />
                            ))}
                        </ul>
                    </Flex>

                    <BikeForm
                        bike={bikeToUpdate}
                        onCreate={(formData) => handleCreate(formData)}
                        onUpdate={(formData) => handleUpdate(formData)}
                        onClose={() => handleClose()}
                    />
                </Content>
                <Footer>Jacque Pedalo</Footer>
            </Layout>
        </>
    );
}
