function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".zuoyebang.cc")) {
        return "SOCKS5 192.168.1.111:1080";
    }
    if (dnsDomainIs(host, ".google.com")) {
        return "SOCKS5 127.0.0.1:7898";
    }
    return "DIRECT";
}

