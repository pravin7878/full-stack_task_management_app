import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../app/actions/task';
import { Text, Button, VStack, HStack, Flex, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;

  return (<Flex direction={"column"}>
<HStack justify={"end"} align={"end"}>
      <Link to={"/task/add"}><Button size={"sm"} variant={"solid"}>Add New</Button></Link>
     </HStack>

    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Your Tasks</Text>
      <SimpleGrid py={5} columns={{base : 1 , sm : 2 , md : 3}} gap={5}>
      {tasks.map((task) => (
        <VStack key={task._id} border="1px solid #ccc" p={4} borderRadius="md" w="100%">
          <Text fontWeight="bold">{task.title}</Text>
          <Text>{task.description}</Text>
          <Button colorScheme="red" size="sm" onClick={() => handleDelete(task._id)}>
            Delete
          </Button>
        </VStack>
      ))}
      </SimpleGrid>
    </VStack>
    </Flex> );
};

export default Dashboard;