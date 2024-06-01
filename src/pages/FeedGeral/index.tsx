import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, CssBaseline, Grid, TextField, CircularProgress, Typography } from '@mui/material';
import { SearchField, FeedContainer } from './styles';
import { Activity, ActivityCard } from '../../components/ActivityCard';

export const GET_ACTIVITIES_BY_USER = gql`
  query GetActivitiesByUser($user: String) {
    mockActivities(user: $user) {
      id
      time
      type
      distance
      calories
      bpm
      user
      userImage
      imageUrl
    }
  }
`;

export function FeedGeral() {
  const [user, setUser] = useState('');
  const { data, loading, error } = useQuery(GET_ACTIVITIES_BY_USER, {
    variables: { user },
    skip: !user, // Pula a consulta se o usuário não estiver definido
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <Box flex="1">
      <CssBaseline />
      <TextField
        fullWidth
        placeholder="Digite o nome do usuário"
        variant="outlined"
        value={user}
        onChange={handleChange}
        style={{ marginBottom: '20px' }}
      />
      {loading && <CircularProgress />}
      {error && <Typography color="error">Erro ao buscar dados: {error.message}</Typography>}
      <FeedContainer maxWidth="lg">
        <Grid container spacing={3}>
          {data?.mockActivities?.map((activity: Activity) => (
            <Grid item xs={12} sm={6} md={4} key={activity.id}>
              <ActivityCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </FeedContainer>
    </Box>
  );
}
