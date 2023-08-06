interface IMessage {
	[x: number]: string
}

const messagesList: IMessage = {
	400: 'Bad request',
	401: 'Unauthorized',
	403: 'Forbidden', 
	404: 'Not Found', 
	409: 'Conflict'
}

export const HttpError = (status: number, message: string = messagesList[status]) => {
	const error = {
		message,
		status
	}
	return error;
}
