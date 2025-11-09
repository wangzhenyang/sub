function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*zuoyebang.cc*")) {
        return "SOCKS5 192.168.1.111:1080";
    }
    return "DIRECT";
}

