#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include<string.h>


const char message[] = "Hello, client";
void client(int sock)
{

}
int main()
{
	int mysocket = socket(AF_INET, SOCK_STREAM,0);
	if(mysocket == -1) {
		printf("error in mysocket\n");
		return -1;
	}

	struct sockaddr_in address;
	struct in_addr ip;
	ip.s_addr = inet_addr("127.0.0.1");
	address.sin_family = AF_INET;
	address.sin_port = htons(8889);
	address.sin_addr = ip;

	if(bind(mysocket,(struct sockaddr*)&address,sizeof(address)) != 0)
	{
		printf("error in bind\n");
		return -1;
	}
	if(listen(mysocket,3)!=0)
	{
		printf("error in listen");
	}
	int newSocket=0;
	do
	{
		 newSocket = accept(mysocket,NULL,NULL);
		 if(newSocket<0)
		 	break;
		 printf("Connected to a client\n");

		if(send(newSocket,message,sizeof(message),0) == -1)
		{
			printf("error in sending message");
			return -1;
		}
		char buffer[2048];
		while(recv(newSocket,buffer,2048,0)>0)
		{
			printf("Message from client: %s\n",buffer);
			if(strncmp(buffer,"exit",4)==0)
			{
				close(newSocket);
				break;
			}
		}
	}while(1);

	close(mysocket);
}