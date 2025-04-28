import { AvatarIcon, Box, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io';

const Stats = () => {

   const statsData = [
        {
          id: 1,
          label: 'Users',
          value: '1,200',
          icon: <AvatarIcon/>,
          bgGradient : "linear-gradient(160deg, #0583ce 0%, #59b5ac 100%)",
          bg: '#0093E9',

          

        },
        {
          id: 2,
          label: 'Sales',
          value: '5,300',
          icon: <IoLogoUsd />,
          bgGradient : 'linear-gradient(147deg, #dc0cf9 0%, #0e47c4 80%)',
          bg : '#21D4FD'
        },
        {
          id: 3,
          label: 'Comments',
          value: '320',
          icon: <FaCommentAlt />,
          bgGradient: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
          bg: '#dc0cf9',
        },
        {
          id: 4,
          label: 'Team',
          value: '15',
          icon: <FaCommentAlt />,
          bgGradient: 'linear-gradient(315deg, #08AEEA 31%, #2AF598 97%)',
          bg: '#08AEEA',
        },
      ]

    return (
      <SimpleGrid  columns={{base : "2",md: "3",lg:"4"}} gap={5}>
      {statsData?.map((stat,idx)=>(
          <Flex 
          direction={{base : "column" ,sm : "row-reverse"  , md : "column"}}
          justify={{sm : "space-between"}}
          align={"center"}
          w="auto"
          color={"white"}
          bgColor={stat?.bg}
          bgGradient={stat?.bgGradient}
          key={idx}
           px={{base : "3",  md:"7"}} py={4} 
            rounded={"md"}
            >
          <HStack gap={{base : "1" , md:"3"}}  zIndex={10}>
              {stat?.icon}
              <Heading fontSize={{base : "sm" , md:"lg"}}>{stat?.value}</Heading>
          </HStack>
          <Text fontSize={{base : "md" , md : "sm"}}>{stat?.label}</Text>
      </Flex>
      ))}
      
     </SimpleGrid>
    );
};

export default Stats;