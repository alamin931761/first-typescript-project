import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // extract value within double quotes using regex (chat gpt)
  const match = err.message.match(/"([^"]*)"/);
  // the extracted value will be in the first capturing group  (chat gpt)
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: `${extractedMessage} is already exists`,
    errorSources,
  };
};

export default handleDuplicateError;
