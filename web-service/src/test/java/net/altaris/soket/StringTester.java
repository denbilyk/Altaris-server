package net.altaris.soket;

/**
 * @author Denis Bilyk.
 */
public class StringTester {
    private static String s = "AT+CIPSTA?\n" +
            "\n" +
            "\n" +
            "+CIPSTA:ip:\"10.10.0.151\"\n" +
            "\n" +
            "+CIPSTA:gateway:\"10.10.0.1\"\n" +
            "\n" +
            "+CIPSTA:netmask:\"255.255.255.0\"\n" +
            "\n" +
            "\n" +
            "\n" +
            "OK\n" +
            "\n";

    public static void main(String[] args) {
        int idx = s.indexOf("+CIPSTA:ip:") + 11;
        String tmp_str = s.substring(idx, idx + 16);
        String ip = tmp_str.substring(1, tmp_str.lastIndexOf("\""));

        System.out.println(ip);

        idx = s.indexOf("+CIPSTA:gateway:") + 16;
        tmp_str = s.substring(idx, idx + 16);
        String getway = tmp_str.substring(1, tmp_str.lastIndexOf("\""));
        System.out.println(getway);

        int idx_mask = s.indexOf("+CIPSTA:netmask:") + 16;
        tmp_str = s.substring(idx_mask, idx_mask + 16);
        String mask = tmp_str.substring(1, tmp_str.lastIndexOf("\""));
        System.out.println(mask);


        System.out.println(grep("+CIPSTA:ip:"));
        System.out.println(grep("+CIPSTA:gateway:"));
        System.out.println(grep("+CIPSTA:netmask:"));

        System.out.println(s.length());

    }

    static String grep(String mask){
        int idx = s.indexOf(mask) + mask.length();
        String tmp_str = s.substring(idx, idx + 16);
        return tmp_str.substring(1, tmp_str.lastIndexOf("\""));
    }

}
