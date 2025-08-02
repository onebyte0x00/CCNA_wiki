// Comprehensive CCNA Quiz Database
const quizzes = {
    'osi-model': {
        title: 'OSI Model Quiz',
        description: 'Test your knowledge of the OSI model layers and their functions',
        difficulty: 'easy',
        timeLimit: 600, // 10 minutes in seconds
        questions: [
            {
                question: 'Which OSI layer is responsible for establishing, managing, and terminating sessions between applications?',
                options: [
                    'Physical Layer',
                    'Data Link Layer',
                    'Network Layer',
                    'Session Layer',
                    'Transport Layer'
                ],
                answer: 3,
                explanation: 'The Session Layer (Layer 5) is responsible for establishing, managing, and terminating sessions between applications.'
            },
            {
                question: 'At which OSI layer do routers primarily operate?',
                options: [
                    'Layer 1 - Physical',
                    'Layer 2 - Data Link',
                    'Layer 3 - Network',
                    'Layer 4 - Transport',
                    'Layer 7 - Application'
                ],
                answer: 2,
                explanation: 'Routers operate at Layer 3 (Network layer) where they make forwarding decisions based on IP addresses.'
            },
            {
                question: 'Which of the following is a Layer 2 device?',
                options: [
                    'Router',
                    'Hub',
                    'Switch',
                    'Firewall',
                    'Load Balancer'
                ],
                answer: 2,
                explanation: 'Switches operate at Layer 2 (Data Link layer) and make forwarding decisions based on MAC addresses.'
            },
{
    question: "Which OSI layer is responsible for logical addressing and routing?",
    options: [
        "Physical Layer",
        "Data Link Layer", 
        "Network Layer",
        "Transport Layer",
        "Session Layer"
    ],
    answer: 2,
    explanation: "The Network Layer (Layer 3) handles logical addressing (IP addresses) and routing between networks."
},
{
    question: "At which layer would you find TCP and UDP protocols?",
    options: [
        "Layer 2",
        "Layer 3", 
        "Layer 4",
        "Layer 5",
        "Layer 7"
    ],
    answer: 2,
    explanation: "TCP and UDP are Transport Layer (Layer 4) protocols that handle end-to-end communication."
},
{
    question: "Which layer is responsible for converting data into bits for transmission?",
    options: [
        "Application Layer",
        "Presentation Layer",
        "Session Layer",
        "Transport Layer", 
        "Physical Layer"
    ],
    answer: 4,
    explanation: "The Physical Layer (Layer 1) converts frames into bits for transmission across the network medium."
},
{
    question: "What is the primary function of the Data Link Layer?",
    options: [
        "End-to-end connection",
        "Logical addressing",
        "Framing and MAC addressing", 
        "Data encryption",
        "Session management"
    ],
    answer: 2,
    explanation: "The Data Link Layer (Layer 2) handles framing and MAC addressing for communication on the same network segment."
},
{
    question: "Which layer would handle compression and encryption?",
    options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Presentation Layer", 
        "Application Layer"
    ],
    answer: 3,
    explanation: "The Presentation Layer (Layer 6) handles data translation, compression, and encryption."
},
{
    question: "What PDU (Protocol Data Unit) is used at the Transport Layer?",
    options: [
        "Bits",
        "Frames",
        "Packets",
        "Segments", 
        "Data"
    ],
    answer: 3,
    explanation: "The Transport Layer uses segments (TCP) or datagrams (UDP) as its PDU."
},
{
    question: "Which layer establishes, manages, and terminates connections between applications?",
    options: [
        "Physical Layer",
        "Session Layer", 
        "Transport Layer",
        "Network Layer",
        "Application Layer"
    ],
    answer: 1,
    explanation: "The Session Layer (Layer 5) manages dialogs between applications."
},
{
    question: "At which layer do switches primarily operate?",
    options: [
        "Layer 1",
        "Layer 2", 
        "Layer 3",
        "Layer 4",
        "Layer 7"
    ],
    answer: 1,
    explanation: "Traditional switches operate at Layer 2 (Data Link Layer) using MAC addresses."
},
{
    question: "Which layer provides services directly to user applications?",
    options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Application Layer" 
    ],
    answer: 4,
    explanation: "The Application Layer (Layer 7) interfaces directly with applications like web browsers and email clients."
},
{
    question: "What is the correct order of encapsulation from top to bottom?",
    options: [
        "Data > Segments > Packets > Frames > Bits",
        "Bits > Frames > Packets > Segments > Data",
        "Data > Packets > Segments > Frames > Bits",
        "Data > Frames > Segments > Packets > Bits",
        "Bits > Segments > Packets > Frames > Data"
    ],
    answer: 0,
    explanation: "Correct encapsulation order is: Data (Layer 7) > Segments (Layer 4) > Packets (Layer 3) > Frames (Layer 2) > Bits (Layer 1)."
},
{
    question: "Which device operates at Layer 1 of the OSI model?",
    options: [
        "Router",
        "Switch",
        "Hub", 
        "Firewall",
        "Load Balancer"
    ],
    answer: 2,
    explanation: "Hubs are Layer 1 devices that simply repeat electrical signals without any intelligence."
},
{
    question: "Which layer ensures reliable end-to-end communication with error recovery?",
    options: [
        "Network Layer",
        "Transport Layer", 
        "Data Link Layer",
        "Session Layer",
        "Presentation Layer"
    ],
    answer: 1,
    explanation: "The Transport Layer (specifically TCP) provides reliable communication with error checking and recovery."
}        ]
    },
    'tcpip-model': {
        title: 'TCP/IP Model Quiz',
        description: 'Questions about the TCP/IP protocol suite and its layers',
        difficulty: 'easy',
        questions: [
            {
                question: 'Which TCP/IP layer is equivalent to the combination of OSI Physical and Data Link layers?',
                options: [
                    'Application',
                    'Transport',
                    'Internet',
                    'Network Access',
                    'Session'
                ],
                answer: 3,
                explanation: 'The Network Access layer in TCP/IP combines the functions of OSI Physical and Data Link layers.'
            },
            {
                question: 'Which protocol operates at the Transport layer of the TCP/IP model?',
                options: [
                    'IP',
                    'ICMP',
                    'ARP',
                    'TCP',
                    'HTTP'
                ],
                answer: 3,
                explanation: 'TCP (Transmission Control Protocol) operates at the Transport layer, providing reliable, connection-oriented communication.'
            },
{
    question: "Which TCP/IP layer is responsible for end-to-end communication and error recovery?",
    options: [
        "Network Access",
        "Internet",
        "Transport", 
        "Application",
        "Session"
    ],
    answer: 2,
    explanation: "The Transport layer handles end-to-end communication with protocols like TCP (reliable) and UDP (unreliable)."
},
{
    question: "Which protocol operates at the Internet layer of the TCP/IP model?",
    options: [
        "HTTP",
        "TCP",
        "IP", 
        "FTP",
        "ARP"
    ],
    answer: 2,
    explanation: "IP (Internet Protocol) operates at the Internet layer, responsible for logical addressing and routing."
},
{
    question: "What is the equivalent of the TCP/IP Network Access layer in the OSI model?",
    options: [
        "Application + Presentation + Session",
        "Transport + Network",
        "Data Link + Physical", 
        "Network + Data Link",
        "Physical only"
    ],
    answer: 2,
    explanation: "The TCP/IP Network Access layer combines OSI's Data Link (Layer 2) and Physical (Layer 1) layers."
},
{
    question: "Which TCP/IP layer would you find protocols like HTTP and FTP?",
    options: [
        "Network Access",
        "Internet",
        "Transport",
        "Application", 
        "Presentation"
    ],
    answer: 3,
    explanation: "Application layer protocols include HTTP, FTP, SMTP, and DNS that interface directly with applications."
},
{
    question: "What is the primary protocol at the Transport layer that provides connection-oriented communication?",
    options: [
        "IP",
        "UDP",
        "TCP", 
        "ICMP",
        "ARP"
    ],
    answer: 2,
    explanation: "TCP provides reliable, connection-oriented communication with sequencing and acknowledgments."
},
{
    question: "Which of these is NOT part of the TCP/IP model?",
    options: [
        "Application",
        "Transport",
        "Internet",
        "Network Access",
        "Presentation" 
    ],
    answer: 4,
    explanation: "Presentation is an OSI layer - the TCP/IP model combines those functions into the Application layer."
},
{
    question: "At which TCP/IP layer does ARP operate?",
    options: [
        "Network Access", 
        "Internet",
        "Transport",
        "Application",
        "Between Network Access and Internet"
    ],
    answer: 0,
    explanation: "ARP operates at the Network Access layer, resolving IP addresses to MAC addresses."
},
{
    question: "Which TCP/IP layer is responsible for physical addressing?",
    options: [
        "Network Access", 
        "Internet",
        "Transport",
        "Application",
        "Presentation"
    ],
    answer: 0,
    explanation: "The Network Access layer handles physical (MAC) addressing and physical transmission of data."
},
{
    question: "What is the correct order of TCP/IP layers from top to bottom?",
    options: [
        "Application, Transport, Internet, Network Access", 
        "Application, Internet, Transport, Network Access",
        "Transport, Application, Internet, Network Access",
        "Network Access, Internet, Transport, Application",
        "Application, Presentation, Transport, Network"
    ],
    answer: 0,
    explanation: "The correct order is: Application > Transport > Internet > Network Access."
},
{
    question: "Which protocol operates at both the Internet and Network Access layers?",
    options: [
        "TCP",
        "UDP",
        "ICMP",
        "ARP", 
        "HTTP"
    ],
    answer: 3,
    explanation: "ARP operates at both layers - it resolves IPs to MACs (Internet to Network Access layer mapping)."
}        ]
    },
    'ip-addressing': {
        title: 'IP Addressing Quiz',
        description: 'Test your knowledge of IPv4 and IPv6 addressing',
        difficulty: 'medium',
        questions: [
            {
                question: 'What is the default subnet mask for the IP address 172.16.32.1?',
                options: [
                    '255.0.0.0',
                    '255.255.0.0',
                    '255.255.255.0',
                    '255.255.255.255',
                    '255.255.254.0'
                ],
                answer: 1,
                explanation: '172.16.32.1 is a Class B address, which has a default subnet mask of 255.255.0.0.'
            },
            {
                question: 'Which of the following is a valid IPv6 address?',
                options: [
                    '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
                    '2001:db8:85a3::8a2e:370:7334',
                    '::1',
                    'All of the above',
                    'None of the above'
                ],
                answer: 3,
                explanation: 'All options are valid IPv6 addresses. The second option uses valid compression, and ::1 is the loopback address.'
            },
            // Add 18 more IP addressing questions...
        ]
    },
    'static-routing': {
        title: 'Static Routing Quiz',
        description: 'Questions about configuring and troubleshooting static routes',
        difficulty: 'easy',
        questions: [
            {
                question: 'What is the correct syntax for configuring a static route on a Cisco router?',
                options: [
                    'ip route [destination_network] [subnet_mask] [next_hop]',
                    'route add [destination_network] [subnet_mask] [next_hop]',
                    'static-route [destination_network] [subnet_mask] [next_hop]',
                    'set route [destination_network] [subnet_mask] [next_hop]',
                    'config route [destination_network] [subnet_mask] [next_hop]'
                ],
                answer: 0,
                explanation: 'The correct Cisco IOS syntax is "ip route [destination_network] [subnet_mask] [next_hop]".'
            },

        
        {
    question: "What is the administrative distance of a static route?",
    options: [
        "0",
        "1", 
        "90",
        "110",
        "120"
    ],
    answer: 1,
    explanation: "Static routes have an administrative distance of 1, making them more preferred than dynamic routes but less than directly connected routes (AD 0)."
},
{
    question: "What command would you use to configure a default static route?",
    options: [
        "ip route 0.0.0.0 255.255.255.255 [next-hop]",
        "ip route 0.0.0.0 0.0.0.0 [next-hop]", 
        "ip default-route [next-hop]",
        "ip route default [next-hop]",
        "ip route * * [next-hop]"
    ],
    answer: 1,
    explanation: "The correct syntax is 'ip route 0.0.0.0 0.0.0.0 [next-hop]' where the double 0.0.0.0 represents any network."
},
{
    question: "What happens to a static route if the exit interface goes down?",
    options: [
        "It remains in the routing table but is marked as inactive",
        "It is immediately removed from the routing table", 
        "It is marked with higher AD",
        "The router automatically converts it to a dynamic route",
        "It remains active but traffic is dropped"
    ],
    answer: 1,
    explanation: "Static routes are removed from the routing table if the exit interface goes down, unlike dynamic routes which can failover."
},
{
    question: "Which parameter makes a static route 'floating'?",
    options: [
        "Adding 'floating' keyword",
        "Setting AD higher than dynamic routes", 
        "Configuring it as secondary",
        "Using a loopback interface",
        "Adding a tracking object"
    ],
    answer: 1,
    explanation: "A floating static route has an AD higher than dynamic routes (e.g., 200) so it only appears in the table if the dynamic route fails."
},
{
    question: "What is the purpose of a recursive static route?",
    options: [
        "To load balance across multiple paths",
        "To resolve the next-hop IP through another route", 
        "To automatically adjust metrics",
        "To create route redundancy",
        "To enable ECMP"
    ],
    answer: 1,
    explanation: "Recursive static routes use a next-hop IP that must be resolved by another route in the routing table."
},
{
    question: "How do you configure a static route with both next-hop IP and exit interface?",
    options: [
        "ip route [network] [mask] [next-hop] interface [int]",
        "ip route [network] [mask] [next-hop] [int]", 
        "ip route [network] [mask] [next-hop]",
        "ip route [network] [mask] [int] [next-hop]",
        "This configuration is not possible"
    ],
    answer: 1,
    explanation: "The correct syntax is 'ip route [network] [mask] [next-hop] [int]' which creates a directly attached static route."
},
{
    question: "What command verifies static routes in the routing table?",
    options: [
        "show ip static",
        "show static-routes",
        "show ip route static", 
        "show route static",
        "show running-config | include static"
    ],
    answer: 2,
    explanation: "'show ip route static' displays only static routes in the routing table."
},
{
    question: "When would you use 'ip route [network] [mask] [interface]' syntax?",
    options: [
        "For point-to-point serial links", 
        "For multi-access networks",
        "When the next-hop is unknown",
        "For floating static routes",
        "When using route redistribution"
    ],
    answer: 0,
    explanation: "This syntax is typically used for point-to-point links where the exit interface alone is sufficient (no ARP needed)."
},
{
    question: "What is the main disadvantage of static routing?",
    options: [
        "Higher CPU usage",
        "Less secure than dynamic routing",
        "Doesn't scale well in large networks", 
        "Requires more bandwidth",
        "Harder to configure than dynamic routing"
    ],
    answer: 2,
    explanation: "Static routing doesn't adapt to topology changes automatically, making it impractical for large, changing networks."
}]
    },
    'ospf': {
        title: 'OSPF Quiz',
        description: 'Test your knowledge of OSPF concepts and configuration',
        difficulty: 'medium',
        questions: [
            {
                question: 'What is the default OSPF hello timer on a broadcast multi-access network?',
                options: [
                    '5 seconds',
                    '10 seconds',
                    '20 seconds',
                    '30 seconds',
                    '40 seconds'
                ],
                answer: 1,
                explanation: 'On broadcast multi-access networks, the default OSPF hello timer is 10 seconds.'
            },
            {
    question: "What is the default OSPF hello timer on a point-to-point link?",
    options: [
        "5 seconds",
        "10 seconds", 
        "20 seconds",
        "30 seconds",
        "40 seconds"
    ],
    answer: 1,
    explanation: "Point-to-point links use 10 second hello timers (same as broadcast networks)."
},
{
    question: "Which OSPF packet type establishes neighbor adjacencies?",
    options: [
        "Hello",
        "DBD", 
        "LSR",
        "LSU",
        "LSAck"
    ],
    answer: 0,
    explanation: "Hello packets discover and maintain neighbors, while DBD/LSR/LSU packets exchange routing information."
},
{
    question: "What is the OSPF multicast address for AllSPFRouters?",
    options: [
        "224.0.0.1",
        "224.0.0.5", 
        "224.0.0.6",
        "224.0.0.9",
        "224.0.0.10"
    ],
    answer: 1,
    explanation: "224.0.0.5 is for AllSPFRouters, while 224.0.0.6 is for AllDRouters."
},
{
    question: "Which command shows OSPF neighbor adjacencies?",
    options: [
        "show ip ospf",
        "show ospf neighbor",
        "show ip ospf neighbor", 
        "show neighbor ospf",
        "show ospf adjacency"
    ],
    answer: 2,
    explanation: "'show ip ospf neighbor' displays OSPF neighbor relationships and their states."
},
{
    question: "What OSPF state indicates that routers have exchanged full LSDBs?",
    options: [
        "Init",
        "2-Way",
        "Exchange",
        "Loading",
        "Full" 
    ],
    answer: 4,
    explanation: "The Full state means neighbors have synchronized their Link-State Databases."
},
{
    question: "Which network type requires a DR/BDR election?",
    options: [
        "Point-to-point",
        "Broadcast", 
        "Non-broadcast",
        "Point-to-multipoint",
        "Loopback"
    ],
    answer: 1,
    explanation: "Broadcast and Non-broadcast multi-access networks require DR/BDR election."
},
{
    question: "What is the default OSPF cost for a 100Mbps interface?",
    options: [
        "1",
        "10",
        "100",
        "1000",
        "10000"
    ],
    answer: 0,
    explanation: "OSPF cost = 100Mbps/reference bandwidth (default 100Mbps), so 100/100 = 1."
},
{
    question: "Which command changes the OSPF router ID?",
    options: [
        "router-id [id] under OSPF config",
        "ip ospf router-id [id]", 
        "ospf router-id [id]",
        "router-id [id] global config",
        "Both 1 and 4 are correct"
    ],
    answer: 4,
    explanation: "You can set router-id either globally or under OSPF configuration."
},
{
    question: "What OSPF area must connect to all other areas?",
    options: [
        "Area 0",
        "Area 1",
        "Area 100",
        "Backbone area", 
        "Stub area"
    ],
    answer: 3,
    explanation: "The backbone area (Area 0) must connect all other OSPF areas."
},
{
    question: "Which LSA type is generated by ABRs?",
    options: [
        "Type 1",
        "Type 2",
        "Type 3", 
        "Type 4",
        "Type 5"
    ],
    answer: 2,
    explanation: "Type 3 LSAs (Summary LSAs) are generated by ABRs to advertise inter-area routes."
},
{
    question: "What command enables OSPF on an interface?",
    options: [
        "ip ospf enable",
        "ip ospf process-id area [area-id]", 
        "ospf enable area [area-id]",
        "enable ospf [process-id]",
        "ip ospf [process-id] area [area-id]"
    ],
    answer: 1,
    explanation: "The correct syntax is 'ip ospf [process-id] area [area-id]' under interface config."
},
{
    question: "Which OSPF area type blocks Type 5 LSAs?",
    options: [
        "Backbone area",
        "Normal area",
        "Stub area", 
        "NSSA",
        "Totally stubby area"
    ],
    answer: 2,
    explanation: "Stub areas block Type 5 LSAs (external routes) and use a default route instead."
},
{
    question: "What is the OSPF dead interval default on broadcast networks?",
    options: [
        "10 seconds",
        "20 seconds",
        "30 seconds",
        "40 seconds", 
        "60 seconds"
    ],
    answer: 3,
    explanation: "The dead interval is 4x the hello timer (10s hello × 4 = 40s dead)."
},
{
    question: "Which command shows OSPF interface details?",
    options: [
        "show ip ospf interface", 
        "show ospf interface",
        "show interface ospf",
        "show ip interface ospf",
        "show ospf interface brief"
    ],
    answer: 0,
    explanation: "'show ip ospf interface' displays OSPF-specific interface information."
},
{
    question: "What OSPF network type doesn't require DR/BDR election?",
    options: [
        "Broadcast",
        "Non-broadcast",
        "Point-to-point", 
        "Point-to-multipoint",
        "Both 3 and 4"
    ],
    answer: 4,
    explanation: "Both point-to-point and point-to-multipoint network types don't use DR/BDR."
},
{
    question: "Which authentication type does OSPF support? (Choose two)",
    options: [
        "Plaintext",
        "MD5", 
        "SHA-1",
        "Null",
        "Both 1 and 2"
    ],
    answer: 4,
    explanation: "OSPF supports plaintext and MD5 authentication (but not SHA-1)."
},
{
    question: "What command changes the OSPF reference bandwidth?",
    options: [
        "auto-cost reference-bandwidth [value]",
        "ospf reference-bandwidth [value]",
        "reference-bandwidth [value]", 
        "ip ospf cost [value]",
        "bandwidth-reference [value]"
    ],
    answer: 2,
    explanation: "'reference-bandwidth [value-in-mbps]' under OSPF configuration changes the cost calculation."
}
        ]
    },
    'eigrp': {
        title: 'EIGRP Quiz',
        description: 'Questions about EIGRP operation and configuration',
        difficulty: 'medium',
        questions: [
            {
                question: 'Which of the following is NOT a component of EIGRP\'s composite metric?',
                options: [
                    'Bandwidth',
                    'Delay',
                    'Reliability',
                    'Load',
                    'Hop count'
                ],
                answer: 4,
                explanation: 'EIGRP uses bandwidth, delay, reliability, and load by default. Hop count is used by RIP but not EIGRP.'
            },
{
    question: "What is the default administrative distance of EIGRP?",
    options: [
        "5",
        "90", 
        "100",
        "110",
        "120"
    ],
    answer: 1,
    explanation: "EIGRP has an AD of 90 for internal routes and 170 for external routes."
},
{
    question: "Which EIGRP packet type is used for route updates?",
    options: [
        "Hello",
        "Query",
        "Reply",
        "Update", 
        "Ack"
    ],
    answer: 3,
    explanation: "Update packets carry routing information and are sent reliably."
},
{
    question: "What is the multicast address used by EIGRP?",
    options: [
        "224.0.0.1",
        "224.0.0.5",
        "224.0.0.6",
        "224.0.0.9", 
        "224.0.0.10"
    ],
    answer: 3,
    explanation: "EIGRP uses 224.0.0.9 for multicast communication."
},
{
    question: "Which command enables EIGRP for AS 100?",
    options: [
        "router eigrp 100", 
        "eigrp 100",
        "enable eigrp 100",
        "router eigrp as 100",
        "ip eigrp 100"
    ],
    answer: 0,
    explanation: "The correct syntax is 'router eigrp [AS-number]' in global config."
},
{
    question: "What is the default EIGRP hello timer on most interfaces?",
    options: [
        "1 second",
        "5 seconds", 
        "10 seconds",
        "15 seconds",
        "60 seconds"
    ],
    answer: 1,
    explanation: "Default hello timer is 5 seconds on most interfaces (60 seconds on T1 or slower)."
},
{
    question: "Which metric component does EIGRP consider by default?",
    options: [
        "Bandwidth and Delay", 
        "Bandwidth and MTU",
        "Delay and Reliability",
        "Load and Reliability",
        "All five components"
    ],
    answer: 0,
    explanation: "By default, EIGRP uses only bandwidth and delay in its metric calculation."
},
{
    question: "What does the 'D' in EIGRP topology table indicate?",
    options: [
        "Default route",
        "Down state",
        "Dual entry", 
        "Directly connected",
        "Disabled route"
    ],
    answer: 2,
    explanation: "The 'D' flag indicates the route is in the DUAL (Diffusing Update Algorithm) process."
},
{
    question: "Which command shows EIGRP neighbor relationships?",
    options: [
        "show ip eigrp neighbors", 
        "show eigrp neighbors",
        "show neighbors eigrp",
        "show ip neighbors eigrp",
        "show eigrp adjacency"
    ],
    answer: 0,
    explanation: "'show ip eigrp neighbors' displays EIGRP neighbor information."
},
{
    question: "What is the EIGRP dead timer default on most interfaces?",
    options: [
        "3 times hello",
        "5 times hello",
        "10 times hello",
        "15 seconds",
        "60 seconds"
    ],
    answer: 2,
    explanation: "Default dead timer is 3 times the hello interval (15 seconds for most interfaces)."
},
{
    question: "Which command enables EIGRP on an interface?",
    options: [
        "ip eigrp enable",
        "ip eigrp as 100",
        "ip eigrp 100 enable",
        "ip eigrp 100", 
        "eigrp enable 100"
    ],
    answer: 3,
    explanation: "The correct syntax is 'ip eigrp [AS-number]' under interface config."
},
{
    question: "What is the successor in EIGRP?",
    options: [
        "Backup route",
        "Primary route", 
        "Default route",
        "External route",
        "Static route"
    ],
    answer: 1,
    explanation: "The successor is the primary (best) route to a destination."
},
{
    question: "Which command displays EIGRP topology table?",
    options: [
        "show ip eigrp topology", 
        "show eigrp routes",
        "show topology eigrp",
        "show ip eigrp database",
        "show eigrp topology all"
    ],
    answer: 0,
    explanation: "'show ip eigrp topology' displays the EIGRP topology table."
},
{
    question: "What does EIGRP use for loop prevention?",
    options: [
        "Split horizon",
        "Route poisoning",
        "DUAL algorithm", 
        "Hold-down timers",
        "TTL checks"
    ],
    answer: 2,
    explanation: "EIGRP uses DUAL (Diffusing Update Algorithm) for loop prevention."
},
{
    question: "Which command enables EIGRP unequal cost load balancing?",
    options: [
        "variance [multiplier]", 
        "load-balance [value]",
        "maximum-paths [number]",
        "unequal-cost",
        "eigrp variance [value]"
    ],
    answer: 0,
    explanation: "The 'variance' command allows traffic sharing across routes with metrics within specified multiplier."
}        ]
    },
    'vlans': {
        title: 'VLANs Quiz',
        description: 'Test your VLAN configuration and troubleshooting skills',
        difficulty: 'easy',
        questions: [
            {
                question: 'Which command shows the VLAN membership of switch ports?',
                options: [
                    'show vlan',
                    'show vlan brief',
                    'show interfaces vlan',
                    'show vlan membership',
                    'show vlan status'
                ],
                answer: 1,
                explanation: 'The "show vlan brief" command displays the VLAN membership of all switch ports.'
            },
{
    question: "What is the normal range for VLAN IDs?",
    options: [
        "0-1005",
        "1-4094", 
        "1-1005",
        "2-4096",
        "0-4095"
    ],
    answer: 1,
    explanation: "Standard VLAN range is 1-4094 (with 1 being default and 1002-1005 reserved)."
},
{
    question: "Which command creates VLAN 10?",
    options: [
        "vlan create 10",
        "vlan 10", 
        "create vlan 10",
        "vlan database 10",
        "switchport vlan 10"
    ],
    answer: 1,
    explanation: "The 'vlan [number]' command in global config creates a VLAN."
},
{
    question: "What type of VLAN is assigned to untagged traffic?",
    options: [
        "Native VLAN", 
        "Default VLAN",
        "Management VLAN",
        "Voice VLAN",
        "Access VLAN"
    ],
    answer: 0,
    explanation: "The native VLAN receives untagged traffic on trunk ports."
},
{
    question: "Which command assigns a VLAN to an interface?",
    options: [
        "switchport vlan 10",
        "vlan membership 10",
        "switchport access vlan 10", 
        "port vlan 10",
        "set vlan 10"
    ],
    answer: 2,
    explanation: "'switchport access vlan [number]' assigns an access port to a VLAN."
},
{
    question: "What is the default VLAN on Cisco switches?",
    options: [
        "VLAN 0",
        "VLAN 1", 
        "VLAN 100",
        "VLAN 1002",
        "VLAN 4094"
    ],
    answer: 1,
    explanation: "VLAN 1 is the default VLAN on all Cisco switches."
},
{
    question: "Which protocol synchronizes VLAN databases across switches?",
    options: [
        "STP",
        "VTP", 
        "DTP",
        "CDP",
        "LLDP"
    ],
    answer: 1,
    explanation: "VLAN Trunking Protocol (VTP) synchronizes VLAN information."
},
{
    question: "Which command configures a trunk port?",
    options: [
        "switchport mode trunk", 
        "port mode trunk",
        "trunk enable",
        "switchport trunk on",
        "set trunk enable"
    ],
    answer: 0,
    explanation: "'switchport mode trunk' configures an interface as a trunk port."
},
{
    question: "What does DTP stand for?",
    options: [
        "Data Trunking Protocol",
        "Dynamic Trunking Protocol", 
        "Direct Trunking Process",
        "Dedicated Trunk Port",
        "Dynamic Transport Protocol"
    ],
    answer: 1,
    explanation: "DTP (Dynamic Trunking Protocol) negotiates trunk formation."
},
{
    question: "Which command shows VLAN membership?",
    options: [
        "show vlan", 
        "show vlan membership",
        "show interface vlan",
        "show vlan ports",
        "show vlan database"
    ],
    answer: 0,
    explanation: "'show vlan' displays VLAN membership information."
},
{
    question: "What is the purpose of a voice VLAN?",
    options: [
        "For switch management",
        "For IP phone traffic", 
        "For native traffic",
        "For default traffic",
        "For router interfaces"
    ],
    answer: 1,
    explanation: "Voice VLANs prioritize IP phone traffic with QoS markings."
},
{
    question: "Which command sets the native VLAN to 99?",
    options: [
        "switchport native vlan 99", 
        "vlan native 99",
        "native vlan 99",
        "switchport trunk native 99",
        "trunk native-vlan 99"
    ],
    answer: 0,
    explanation: "'switchport trunk native vlan [number]' sets the native VLAN."
},
{
    question: "What VLAN type cannot be deleted?",
    options: [
        "Native VLAN",
        "Default VLAN", 
        "Management VLAN",
        "Voice VLAN",
        "All VLANs can be deleted"
    ],
    answer: 1,
    explanation: "VLAN 1 (default VLAN) cannot be deleted or renamed."
},
{
    question: "Which command enables VTP pruning?",
    options: [
        "vtp pruning", 
        "switchport pruning enable",
        "vtp mode pruning",
        "enable vtp pruning",
        "pruning vtp on"
    ],
    answer: 0,
    explanation: "'vtp pruning' in global config enables pruning."
},
{
    question: "What is the purpose of VLAN 1?",
    options: [
        "Carries only management traffic",
        "Default VLAN for all ports", 
        "Reserved for voice traffic",
        "Used only for trunk links",
        "Special system VLAN"
    ],
    answer: 1,
    explanation: "VLAN 1 is the default VLAN where all ports belong unless reconfigured."
}        ]
    },
    'stp': {
        title: 'Spanning Tree Protocol Quiz',
        description: 'Questions about STP operation and configuration',
        difficulty: 'hard',
        questions: [
            {
                question: 'Which STP port state prevents loops but doesn\'t forward user traffic?',
                options: [
                    'Blocking',
                    'Listening',
                    'Learning',
                    'Forwarding',
                    'Disabled'
                ],
                answer: 1,
                explanation: 'The Listening state is when the port is preparing to forward traffic but isn\'t forwarding yet, preventing loops during convergence.'
            },
{
    question: "Which STP port state listens for BPDUs but doesn't forward traffic?",
    options: [
        "Blocking",
        "Listening", 
        "Learning",
        "Forwarding",
        "Disabled"
    ],
    answer: 1,
    explanation: "The Listening state (15 sec duration) processes BPDUs but doesn't forward traffic or learn MACs."
},
{
    question: "What is the default STP priority value for Cisco switches?",
    options: [
        "0",
        "32768", 
        "4096",
        "8192",
        "16384"
    ],
    answer: 1,
    explanation: "The default STP bridge priority is 32768, which becomes 32768 + VLAN ID when using PVST+."
},
{
    question: "Which STP timer determines how long a port stays in Listening/Learning states?",
    options: [
        "Hello Time",
        "Forward Delay", 
        "Max Age",
        "Hold Time",
        "Topology Change"
    ],
    answer: 1,
    answer: 1,
    explanation: "The Forward Delay timer (default 15 sec) determines Listening/Learning state duration."
},
{
    question: "What is the purpose of BPDU Guard?",
    options: [
        "Prevents rogue switches", 
        "Speeds up convergence",
        "Blocks TCN BPDUs",
        "Filters BPDU content",
        "Secures the root bridge"
    ],
    answer: 0,
    explanation: "BPDU Guard disables ports receiving BPDUs, preventing rogue switches from affecting topology."
},
{
    question: "Which command enables Rapid PVST+?",
    options: [
        "spanning-tree mode rapid-pvst", 
        "spanning-tree mode rstp",
        "spanning-tree rapid-pvst",
        "spanning-tree mode pvst+ rapid",
        "rstp enable"
    ],
    answer: 0,
    explanation: "The correct command is 'spanning-tree mode rapid-pvst' in global config."
},
{
    question: "What is the STP port cost for a 1Gbps interface?",
    options: [
        "1",
        "4", 
        "10",
        "19",
        "100"
    ],
    answer: 1,
    explanation: "1Gbps interfaces have a default STP cost of 4 (revised IEEE values)."
},
{
    question: "Which STP feature allows immediate transition to Forwarding state?",
    options: [
        "PortFast", 
        "UplinkFast",
        "BackboneFast",
        "BPDU Filter",
        "Root Guard"
    ],
    answer: 0,
    explanation: "PortFast bypasses Listening/Learning states for access ports."
},
{
    question: "What does TCN stand for in STP?",
    options: [
        "Topology Change Notification", 
        "Trunk Configuration Notice",
        "Terminal Connection Node",
        "Transparent Convergence Network",
        "Tree Construction Notice"
    ],
    answer: 0,
    explanation: "TCN (Topology Change Notification) BPDUs inform switches of topology changes."
},
{
    question: "Which command shows the root bridge information?",
    options: [
        "show spanning-tree root", 
        "show spanning-tree", 
        "show stp root",
        "show stp brief",
        "show spanning-tree detail"
    ],
    answer: 1,
    explanation: "'show spanning-tree' displays root bridge ID, cost, and port roles."
},
{
    question: "What is the purpose of Root Guard?",
    options: [
        "Prevents superior BPDUs", 
        "Blocks all BPDUs",
        "Filters TCN messages",
        "Secures edge ports",
        "Disables PortFast"
    ],
    answer: 0,
    explanation: "Root Guard prevents ports from receiving superior BPDUs that could change the root bridge."
},
{
    question: "Which STP version runs per-VLAN instances?",
    options: [
        "Common Spanning Tree (CST)",
        "Rapid Spanning Tree (RSTP)",
        "Per-VLAN Spanning Tree (PVST+)", 
        "Multiple Spanning Tree (MSTP)",
        "IEEE 802.1D"
    ],
    answer: 2,
    explanation: "PVST+ runs a separate STP instance for each VLAN (Cisco proprietary)."
}        ]
    },
    'etherchannel': {
        title: 'EtherChannel Quiz',
        description: 'Test your knowledge of EtherChannel configuration',
        difficulty: 'medium',
        questions: [
            {
                question: 'Which protocol is Cisco proprietary for EtherChannel?',
                options: [
                    'LACP',
                    'PAgP',
                    'STP',
                    'VTP',
                    'CDP'
                ],
                answer: 1,
                explanation: 'PAgP (Port Aggregation Protocol) is Cisco proprietary, while LACP is the standards-based protocol.'
            },
{
    question: "Which protocol is Cisco proprietary for EtherChannel?",
    options: [
        "LACP",
        "PAgP", 
        "STP",
        "DTP",
        "CDP"
    ],
    answer: 1,
    explanation: "PAgP (Port Aggregation Protocol) is Cisco proprietary, while LACP is IEEE standard."
},
{
    question: "What is the maximum number of active ports in an LACP EtherChannel?",
    options: [
        "2",
        "4",
        "8", 
        "16",
        "32"
    ],
    answer: 2,
    explanation: "LACP supports up to 16 member ports, but only 8 can be active simultaneously."
},
{
    question: "Which EtherChannel mode actively negotiates using LACP?",
    options: [
        "on",
        "auto",
        "desirable",
        "active", 
        "passive"
    ],
    answer: 3,
    explanation: "'active' mode initiates LACP negotiations (counterpart to 'passive' mode)."
},
{
    question: "What EtherChannel load-balancing method uses source/dest IP?",
    options: [
        "src-mac",
        "dst-mac",
        "src-dst-ip", 
        "src-dst-port",
        "src-dst-mac"
    ],
    answer: 2,
    explanation: "'src-dst-ip' provides better load distribution for IP traffic than MAC-based methods."
},
{
    question: "Which command creates an EtherChannel group?",
    options: [
        "channel-group 1 mode on", 
        "etherchannel 1",
        "port-channel 1",
        "interface port-channel 1",
        "lacp group 1"
    ],
    answer: 0,
    explanation: "'channel-group [number] mode [mode]' under interface configuration creates the bundle."
},
{
    question: "What must match for all EtherChannel member ports?",
    options: [
        "Speed and Duplex",
        "VLAN membership",
        "STP settings",
        "All of the above", 
        "None of the above"
    ],
    answer: 3,
    explanation: "All physical ports must have identical speed, duplex, VLANs, and STP configurations."
},
{
    question: "Which command verifies EtherChannel status?",
    options: [
        "show etherchannel summary", 
        "show port-channel",
        "show interface port-channel",
        "show lacp neighbor",
        "show pagp counters"
    ],
    answer: 0,
    explanation: "'show etherchannel summary' displays the most concise overview of channel status."
}        ]
    },
    'acls': {
        title: 'Access Control Lists Quiz',
        description: 'Questions about configuring and troubleshooting ACLs',
        difficulty: 'medium',
        questions: [
            {
                question: 'What is the range for standard IP ACLs on Cisco devices?',
                options: [
                    '1-99',
                    '100-199',
                    '200-299',
                    '800-899',
                    '1300-1999'
                ],
                answer: 0,
                explanation: 'Standard IP ACLs use numbers 1-99, while extended IP ACLs use 100-199 and 2000-2699.'
            },
{
    question: "Which ACL type filters traffic based on source IP only?",
    options: [
        "Standard", 
        "Extended",
        "Named",
        "Reflexive",
        "Dynamic"
    ],
    answer: 0,
    explanation: "Standard ACLs (1-99) filter based only on source IP addresses."
},
{
    question: "What is the range for extended IP ACLs?",
    options: [
        "1-99",
        "100-199", 
        "200-299",
        "1300-1999",
        "Both 2 and 4"
    ],
    answer: 4,
    explanation: "Extended ACLs use ranges 100-199 and 2000-2699 (1300-1999 are also extended ACLs in some IOS versions)."
},
{
    question: "Where should standard ACLs typically be placed?",
    options: [
        "Close to the source",
        "Close to the destination", 
        "On backbone routers",
        "On distribution switches",
        "On the core router"
    ],
    answer: 1,
    explanation: "Standard ACLs should be placed near the destination since they can't filter specific destinations."
},
{
    question: "Which wildcard mask would match exactly 192.168.1.0/24?",
    options: [
        "0.0.0.0",
        "0.0.0.255", 
        "255.255.255.0",
        "0.255.255.255",
        "255.0.0.0"
    ],
    answer: 1,
    explanation: "Wildcard 0.0.0.255 means 'match first 24 bits exactly' (inverse of subnet mask)."
},
{
    question: "What happens if an ACL has no permit statements?",
    options: [
        "All traffic is allowed",
        "All traffic is blocked", 
        "Only ICMP is allowed",
        "The ACL is invalid",
        "It defaults to permit any"
    ],
    answer: 1,
    explanation: "ACLs have an implicit 'deny any' at the end, blocking all traffic if no permits exist."
},
{
    question: "Which command applies an ACL to a VTY line?",
    options: [
        "access-group 10 in",
        "access-class 10 in", 
        "ip access-list 10 in",
        "apply access-list 10",
        "filter 10 in"
    ],
    answer: 1,
    explanation: "'access-class' is used for applying ACLs to VTY lines, while 'access-group' is for interfaces."
},
{
    question: "What does 'established' keyword do in an extended ACL?",
    options: [
        "Allows only responses to initiated connections", 
        "Permits new TCP connections",
        "Blocks all established sessions",
        "Filters based on TCP window size",
        "Allows only ACK packets"
    ],
    answer: 0,
    explanation: "The 'established' keyword matches TCP segments with ACK/RST flags set (return traffic)."
},
{
    question: "Which ACL type can filter based on TCP/UDP port numbers?",
    options: [
        "Standard",
        "Extended", 
        "Named",
        "Reflexive",
        "Both 2 and 3"
    ],
    answer: 4,
    explanation: "Extended and named extended ACLs can filter by port numbers; standard ACLs cannot."
},
{
    question: "What is the sequence number feature in named ACLs used for?",
    options: [
        "Tracking packet order",
        "Prioritizing rules",
        "Inserting/editing specific entries", 
        "TCP sequencing",
        "Fragment reassembly"
    ],
    answer: 2,
    explanation: "Sequence numbers allow inserting/deleting specific ACL entries without recreating the entire ACL."
}        ]
    },
    'nat': {
        title: 'NAT Quiz',
        description: 'Test your NAT configuration knowledge',
        difficulty: 'hard',
        questions: [
            {
                question: 'Which NAT type maps one private IP to one public IP?',
                options: [
                    'Static NAT',
                    'Dynamic NAT',
                    'PAT',
                    'NAT64',
                    'All of the above'
                ],
                answer: 0,
                explanation: 'Static NAT provides a one-to-one mapping between private and public IP addresses.'
            },
{
    question: "Which NAT type maps one private IP to one public IP?",
    options: [
        "Static NAT", 
        "Dynamic NAT",
        "PAT",
        "NAT64",
        "NAT-PT"
    ],
    answer: 0,
    explanation: "Static NAT provides consistent one-to-one mapping between private and public IPs."
},
{
    question: "What is the most common NAT type used for internet access?",
    options: [
        "Static NAT",
        "Dynamic NAT",
        "PAT (Overloading)", 
        "NAT64",
        "Twice NAT"
    ],
    answer: 2,
    explanation: "PAT (Port Address Translation) allows many private IPs to share one public IP using ports."
},
{
    question: "Which command defines the inside NAT interface?",
    options: [
        "ip nat inside", 
        "nat inside enable",
        "ip nat enable inside",
        "interface nat inside",
        "set nat inside"
    ],
    answer: 0,
    explanation: "'ip nat inside' is configured on the interface connected to the private network."
},
{
    question: "What does the 'overload' keyword enable in NAT?",
    options: [
        "Static NAT",
        "Dynamic NAT",
        "PAT", 
        "NAT failover",
        "NAT redundancy"
    ],
    answer: 2,
    explanation: "'overload' enables PAT by using source ports to track multiple translations."
},
{
    question: "Which command shows active NAT translations?",
    options: [
        "show ip nat statistics",
        "show nat translations", 
        "show ip nat translations",
        "show translations",
        "debug ip nat"
    ],
    answer: 2,
    explanation: "'show ip nat translations' displays the current NAT mapping table."
},
{
    question: "What is the purpose of NAT pool?",
    options: [
        "Defines inside local addresses",
        "Reserves public IPs for static NAT",
        "Specifies available public IPs for dynamic NAT", 
        "Maps to private IP ranges",
        "Stores NAT configuration"
    ],
    answer: 2,
    explanation: "NAT pools define ranges of public IPs available for dynamic NAT assignments."
},
{
    question: "Which NAT type requires manual configuration of each mapping?",
    options: [
        "Static NAT", 
        "Dynamic NAT",
        "PAT",
        "NAT64",
        "Automatic NAT"
    ],
    answer: 0,
    explanation: "Static NAT requires manual configuration of each private-to-public IP mapping."
},
{
    question: "What does 'inside global' represent in NAT terminology?",
    options: [
        "Private IP as seen internally",
        "Public IP as seen externally", 
        "Router's internal interface",
        "Public IP pool",
        "Private IP pool"
    ],
    answer: 1,
    explanation: "'Inside global' is the public IP representing an internal host to the outside world."
},
{
    question: "Which command configures PAT for an entire private network?",
    options: [
        "ip nat inside source list 1 interface serial0/0 overload", 
        "ip nat pool PAT 1.1.1.1 1.1.1.1 overload",
        "nat overload enable",
        "ip pat enable",
        "interface nat overload"
    ],
    answer: 0,
    explanation: "This command enables PAT using an ACL to identify private IPs and an interface for the public IP."
},
{
    question: "What problem does NAT64 solve?",
    options: [
        "IPv4 to IPv6 translation", 
        "IPv6 to IPv4 translation",
        "Port exhaustion",
        "NAT synchronization",
        "TCP sequence issues"
    ],
    answer: 0,
    explanation: "NAT64 facilitates communication between IPv6-only and IPv4-only networks."
},
{
    question: "Which NAT verification command shows translation statistics?",
    options: [
        "show ip nat statistics", 
        "show nat counters",
        "debug ip nat detailed",
        "show ip nat hits",
        "show translations stats"
    ],
    answer: 0,
    explanation: "'show ip nat statistics' displays counts of translations, hits, and pool usage."
}        ]
    },
    'dhcp-dns': {
        title: 'DHCP & DNS Quiz',
        description: 'Questions about DHCP and DNS services',
        difficulty: 'easy',
        questions: [
            {
                question: 'Which port does DHCP use for client communications?',
                options: [
                    'TCP 53',
                    'UDP 53',
                    'TCP 67',
                    'UDP 67',
                    'TCP 80'
                ],
                answer: 3,
                explanation: 'DHCP clients use UDP port 68, while servers use UDP port 67 for communications.'
            },
{
    question: "Which DHCP message type is sent by a client to request an IP address?",
    options: [
        "DHCPOFFER",
        "DHCPDISCOVER", 
        "DHCPREQUEST",
        "DHCPACK",
        "DHCPINFORM"
    ],
    answer: 1,
    explanation: "DHCPDISCOVER is the initial broadcast message sent by a client to locate DHCP servers."
},
{
    question: "What is the default DHCP lease time on Cisco routers?",
    options: [
        "1 hour",
        "1 day", 
        "3 days",
        "1 week",
        "30 days"
    ],
    answer: 1,
    explanation: "The default lease time is 24 hours (1 day) unless specifically configured otherwise."
},
{
    question: "Which port does DNS use?",
    options: [
        "TCP 53",
        "UDP 53", 
        "TCP 67",
        "UDP 67",
        "Both 1 and 2"
    ],
    answer: 4,
    explanation: "DNS uses UDP port 53 for standard queries and TCP port 53 for zone transfers and large responses."
},
{
    question: "Which command enables DHCP services on a Cisco router?",
    options: [
        "dhcp enable",
        "service dhcp", 
        "ip dhcp server",
        "enable dhcp",
        "dhcp service start"
    ],
    answer: 1,
    explanation: "The 'service dhcp' command enables the DHCP server functionality on a Cisco router."
},
{
    question: "What is the purpose of a DHCP relay agent?",
    options: [
        "Extends the lease time",
        "Forwards DHCP requests across subnets", 
        "Authenticates DHCP clients",
        "Load balances DHCP servers",
        "Provides DNS resolution"
    ],
    answer: 1,
    explanation: "A DHCP relay agent forwards client broadcasts to DHCP servers on different subnets as unicast."
},
{
    question: "Which DNS record type maps hostnames to IP addresses?",
    options: [
        "A", 
        "PTR",
        "MX",
        "CNAME",
        "NS"
    ],
    answer: 0,
    explanation: "A records (Address records) map hostnames to IPv4 addresses, while AAAA records map to IPv6."
},
{
    question: "What command configures a router as a DHCP client on an interface?",
    options: [
        "ip dhcp client",
        "ip address dhcp", 
        "dhcp client enable",
        "interface dhcp",
        "enable dhcp client"
    ],
    answer: 1,
    explanation: "The 'ip address dhcp' interface command configures the router to obtain an IP via DHCP."
}        ]
    },
    'practice-exam-1': {
        title: 'CCNA Practice Exam 1',
        description: 'Full 50-question practice exam covering all CCNA topics',
        difficulty: 'hard',
        timeLimit: 5400, // 90 minutes
        questions: [
            // 50 comprehensive exam questions...
        ]
    },
    'practice-exam-2': {
        title: 'CCNA Practice Exam 2',
        description: 'Second full 50-question practice exam',
        difficulty: 'hard',
        timeLimit: 5400,
        questions: [
            // 50 more comprehensive exam questions...
        ]
    }
};

// Quiz state variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 0;
let userAnswers = [];

// DOM elements
const quizContainer = document.getElementById('quiz-container');
const quizTitle = document.getElementById('quiz-title');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizTimer = document.getElementById('quiz-timer');

// Start a quiz
function startQuiz(quizName) {
    currentQuiz = quizzes[quizName];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Set up the quiz UI
    quizTitle.textContent = currentQuiz.title;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    currentQuestionElement.textContent = 1;
    quizProgressBar.style.width = '0%';
    
    // Set up timer if applicable
    if (currentQuiz.timeLimit) {
        timeLeft = currentQuiz.timeLimit;
        updateTimerDisplay();
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        quizTimer.style.display = 'none';
    }
    
    // Show the quiz container
    quizContainer.style.display = 'block';
    document.querySelector('#quiz-container').scrollIntoView({ behavior: 'smooth' });
    
    // Load the first question
    showQuestion();
}

// Show the current question
function showQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    // Update progress
    const progressPercent = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Display the question
    quizQuestion.textContent = question.question;
    
    // Clear previous options
    quizOptions.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        quizOptions.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Clear feedback
    quizFeedback.style.display = 'none';
    quizFeedback.className = 'quiz-feedback';
    quizFeedback.innerHTML = '';
    
    // If we've already answered this question, show the feedback
    if (userAnswers[currentQuestionIndex] !== undefined) {
        showFeedback();
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

// Select an option
function selectOption(optionIndex) {
    // Mark the selected option
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    // Store the user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable the Next button
    nextBtn.disabled = false;
    
    // Show feedback if configured to show immediately
    showFeedback();
}

// Show feedback for the current question
function showFeedback() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    // Highlight correct and incorrect answers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.classList.remove('correct', 'incorrect');
        if (index === question.answer) {
            option.classList.add('correct');
        } else if (index === userAnswer && index !== question.answer) {
            option.classList.add('incorrect');
        }
    });
    
    // Show explanation
    quizFeedback.style.display = 'block';
    if (userAnswer === question.answer) {
        quizFeedback.classList.add('alert', 'alert-success');
        quizFeedback.innerHTML = `<strong>Correct!</strong> ${question.explanation}`;
    } else {
        quizFeedback.classList.add('alert', 'alert-danger');
        quizFeedback.innerHTML = `<strong>Incorrect.</strong> ${question.explanation}`;
    }
}

// Move to the next question
function nextQuestion() {
    // If we haven't answered this question yet, require an answer
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    // Move to next question or end quiz
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// Go back to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// End the quiz and show results
function endQuiz() {
    // Stop the timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Calculate score
    score = 0;
    for (let i = 0; i < currentQuiz.questions.length; i++) {
        if (userAnswers[i] === currentQuiz.questions[i].answer) {
            score++;
        }
    }
    
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    const pass = percentage >= 70; // 70% passing score
    
    // Display results
    quizContainer.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Quiz Results</h3>
            </div>
            <div class="card-body text-center">
                <h4 class="${pass ? 'text-success' : 'text-danger'}">${pass ? 'Passed!' : 'Failed'}</h4>
                <div class="display-4 mb-3 ${pass ? 'text-success' : 'text-danger'}">${percentage}%</div>
                <p>You scored ${score} out of ${currentQuiz.questions.length} questions</p>
                
                <div class="progress mb-4" style="height: 20px;">
                    <div class="progress-bar ${pass ? 'bg-success' : 'bg-danger'}" 
                         role="progressbar" 
                         style="width: ${percentage}%" 
                         aria-valuenow="${percentage}" 
                         aria-valuemin="0" 
                         aria-valuemax="100"></div>
                </div>
                
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-primary" onclick="location.reload()">Back to Quizzes</button>
                    <button class="btn btn-secondary" onclick="reviewQuiz()">Review Answers</button>
                </div>
            </div>
        </div>
    `;
}

// Review quiz answers
function reviewQuiz() {
    // Recreate the quiz container
    quizContainer.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="mb-0">Quiz Review</h3>
                    <div class="badge bg-light text-dark">Score: ${score}/${currentQuiz.questions.length}</div>
                </div>
            </div>
            <div class="card-body">
                <div id="quiz-review-questions"></div>
                <div class="text-center mt-4">
                    <button class="btn btn-primary" onclick="location.reload()">Back to Quizzes</button>
                </div>
            </div>
        </div>
    `;
    
    const reviewContainer = document.getElementById('quiz-review-questions');
    
    // Add each question with feedback
    currentQuiz.questions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        const userAnswer = userAnswers[index] !== undefined ? question.options[userAnswers[index]] : 'Not answered';
        const correctAnswer = question.options[question.answer];
        
        const questionElement = document.createElement('div');
        questionElement.className = `mb-4 p-3 border rounded ${isCorrect ? 'border-success' : 'border-danger'}`;
        questionElement.innerHTML = `
            <h5>Question ${index + 1}: ${question.question}</h5>
            <div class="mb-2"><strong>Your answer:</strong> ${userAnswer}</div>
            ${!isCorrect ? `<div class="mb-2"><strong>Correct answer:</strong> ${correctAnswer}</div>` : ''}
            <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'}">${question.explanation}</div>
        `;
        
        reviewContainer.appendChild(questionElement);
    });
}

// Timer functions
function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    quizTimer.textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Search and filter functions
function searchQuizzes() {
    const searchTerm = document.getElementById('quiz-search').value.toLowerCase();
    const quizCards = document.querySelectorAll('.quiz-card');
    
    quizCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const text = card.querySelector('.card-text').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || text.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

function filterQuizzes(difficulty) {
    const quizCards = document.querySelectorAll('.quiz-card');
    const difficultyButtons = document.querySelectorAll('.btn-group .btn');
    
    // Update active button
    difficultyButtons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(difficulty)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter quizzes
    quizCards.forEach(card => {
        const badges = card.querySelectorAll('.badge');
        let showCard = difficulty === 'all';
        
        badges.forEach(badge => {
            if (difficulty !== 'all' && 
                (badge.textContent.toLowerCase().includes(difficulty) || 
                 badge.classList.contains('bg-' + difficulty))) {
                showCard = true;
            }
        });
        
        card.parentElement.style.display = showCard ? 'block' : 'none';
    });
}
