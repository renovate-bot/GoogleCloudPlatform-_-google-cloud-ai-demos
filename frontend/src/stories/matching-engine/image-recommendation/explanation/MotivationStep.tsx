/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';

export const MotivationStep = () => {
  return (
    <Grid container spacing={4} padding={0}>
      <Grid xs={12}>
        <Typography variant="body1">
          Imagine that you have a e-commerce website and you need search functionality so that users can find
          recommendations by typing keywords.
        </Typography>
      </Grid>
    </Grid>
  );
};
