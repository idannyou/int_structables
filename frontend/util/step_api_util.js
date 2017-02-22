
export const fetchSteps = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/steps'
  });
};

export const fetchStep = (id) => {
  return $.ajax({
    method: 'GET',
    url:`/api/steps/${id}`
  });
};

export const createStep = (step, conceptId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: {step: {step, conceptId}}
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
