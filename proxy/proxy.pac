function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".zuoyebang.cc")) {
        return "SOCKS5 192.168.1.111:1080";
    }
    return "DIRECT";
}

