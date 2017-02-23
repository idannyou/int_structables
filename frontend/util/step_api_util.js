
export const fetchSteps = (conceptId) => {
  return $.ajax({
    method: 'GET',
    url:'/api/steps',
    data: {step: conceptId}
  });
};

export const fetchStep = (id) => {
  return $.ajax({
    method: 'GET',
    url:`/api/steps/${id}`
  });
};

export const createStep = (step) => {
  return $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: {step}
  });
};

export const updateStep = (step, conceptId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/steps/${step.id}`,
    data: {step}
  });
};

export const deleteStep = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/steps/${id}`
  });
};
