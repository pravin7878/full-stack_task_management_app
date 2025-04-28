import React from 'react';
import { Avatar, Box, Button, HStack, Icon, IconButton, Image } from "@chakra-ui/react";
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { ColorModeButton } from "../ui/color-mode";
import { BiBell } from "react-icons/bi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { SideBarDrawer } from "../ui/Drawer";
import Sidebar from "./Sidebar";
import logo from "../../assets/logo_deshboard.png"
import { MdAddTask } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
const [isSerchActive, setIsSerchActive]= useState(false)
const [isLogged, setIsLogged] = useState(false)

    return (
        <HStack 
            px={{ base: 2, md: 6 }}
            py={{ base: 1, md: 3 }}
            align="center"
            justify="space-between"
            boxShadow="md"
            zIndex={1}
        >
            {/* sm screen only */}
            <HStack
                hideFrom={"md"}
            >
                <Box

                >
                    <SideBarDrawer>
                        <Sidebar />
                    </SideBarDrawer>
                </Box>
                <Box >
                                    <Icon>
                                    <MdAddTask size={20}/>
                                    </Icon>
                                </Box>
            </HStack>
 
            <Box 
            w={"60%"} 
            display={{base : isSerchActive ? "block" : "none", md : "block"}}
            >
                <InputGroup flex="1" startElement={<LuSearch />} >
                    <Input placeholder="Search task..." />
                </InputGroup>
            </Box>

            <HStack>
                <IconButton
                    variant={"ghost"}
                    size={["xs", "sm", "md"]}
                    hideFrom={"md"}
                    aria-label="Search database"
                    onClick={()=>setIsSerchActive(!isSerchActive)}
                >
                   {isSerchActive ? <CgClose/> : <LuSearch />}
                </IconButton>

                <ColorModeButton 
                hidden={isSerchActive}
                />

                <IconButton
                    variant={"ghost"}
                    size={["xs", "sm", "md"]}
                    rounded={"full"}
                    hidden={isSerchActive}
                >
                    <BiBell />
                </IconButton>

                { isLogged ? <Avatar.Root
                    colorPalette="red"
                    size={["xs"]}
                    cursor={"pointer"}
                    hidden={isSerchActive}
                >
                    <Avatar.Fallback />
                </Avatar.Root>
                :
                <Link to={"/singin"}>
                <Button size={"md"}>
                    SingIn
                </Button>
                </Link>
                }

            </HStack>
        </HStack>
    );
};


export default Header