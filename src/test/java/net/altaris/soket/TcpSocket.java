package net.altaris.soket;

import javax.naming.ldap.SortKey;
import java.io.*;
import java.net.*;

/**
 * @author Denis Bilyk.
 */
public class TcpSocket {

    public static void main(String[] args) throws IOException, InterruptedException {
        SocketAddress addr = new InetSocketAddress(InetAddress.getByName("10.10.0.10"), 8080);
        String get = "GET /api/rest/submit?temp=20&humid=23\r\n\r\n";
        String guic = "GET /api/rest/guice\r\n\r\n";
        String post = "POST /api/rest/submit HTTP/1.1\n" +
                "Host: 10.10.0.10:8080\n" +
                "temp: 22\n" +
                "humid: 34\r\n\r\n";


        /*
        for (int i = 0; i < 10; i++) {
            Socket socket = connectAndSend(addr, post);
            Thread.sleep(3000);
            InputStream is = socket.getInputStream();
            DataInputStream dis = new DataInputStream(is);
            socketRead(dis);
            socket.close();
        }*/
        System.out.println(post.length());

        System.out.println("Guice");
        Socket socket = connectAndSend(addr, guic);
        InputStream is = socket.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        socketRead(dis);
    }

    private static Socket connectAndSend(SocketAddress addr, String get) throws IOException {
        Socket socket = new Socket();
        socket.connect(addr);
        OutputStream os = socket.getOutputStream();
        DataOutputStream dos = new DataOutputStream(os);
        dos.write(get.getBytes());
        dos.flush();
        return socket;
    }

    private static void socketRead(DataInputStream dis) throws IOException {
        byte[] buff = new byte[64 * 1024];
        dis.read(buff);
        String data = new String(buff);
        System.out.println(data);
    }
}
