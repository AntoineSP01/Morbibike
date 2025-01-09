import React, { useState } from "react";
import { Flex, Button, Popover, Row, Col } from "antd";
import "../styles/App.css";
import { Bike } from "../models/Bike";

interface Props {
    bike: Bike;
    onDelete: () => void;
    onUpdate: () => void;
}

export const BikeCard = ({ bike, onDelete, onUpdate }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = () => {
        setOpen(true);
    };

    const content = (
        <Flex align="center" vertical>
            <p>Are you sure ?</p>
            <Flex gap={30} justify="center">
                <Button onClick={onDelete}>Yes</Button>
                <Button onClick={hide}>No</Button>
            </Flex>
        </Flex>
    );
    return (
        <>
            <Row className="descriptionBike" justify="space-between" style={{ margin: "23px 15%" }}>
                <Col span={2}>{bike.name}</Col>
                <Col span={2}>{bike.model}</Col>
                <Col span={2}>{bike.years}</Col>
                <Col span={2}>{bike.typeOfBike && bike.typeOfBike.name}</Col>
                <Col span={2}>
                    <Popover
                        content={content}
                        open={open}
                        onOpenChange={handleOpenChange}
                        trigger={"click"}
                        placement="bottom"
                    >
                        <Button>Delete</Button>
                    </Popover>
                </Col>
                <Col span={2}>
                    <Button onClick={onUpdate}>Update</Button>
                </Col>
            </Row>
        </>
    );
};
export default BikeCard;
