#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include<string.h>


int main()
{
	int clSocket= socket(AF_INET, SOCK_STREAM,0);
	if(clSocket == -1) {
		printf("error in clsocket\n");
		return -1;
	}
	struct sockaddr_in servaddress;
	struct in_addr ip;
	ip.s_addr = inet_addr("127.0.0.1");
	servaddress.sin_family = AF_INET;
	servaddress.sin_port = htons(8889);
	servaddress.sin_addr = ip;

	if(connect(clSocket,(struct sockaddr*)&servaddress,sizeof(servaddress)) != 0)
	{
		printf("error in connecting to server");
		return -1;
	}
	char *buffer;
	if(recv(clSocket,buffer,sizeof(buffer),MSG_WAITALL)<=0)
	{
		printf("error in receive message from server");
		return -1;
	}
	printf("Message from server: %s\n",buffer);

	char newbuffer[2048];
	printf("Insert message for server(or exit for finish connection): ");
	do
	{
	scanf("%s",&newbuffer);
	if( send(clSocket,newbuffer,sizeof(newbuffer),0) == -1)
	{
		printf("error in sending message");
	}
	} while(strncmp(newbuffer,"exit",4)!=0);
	
	close(clSocket);
}