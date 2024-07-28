console.log("Script loaded successfully ");
console.log(Process.id)
console.log(Process.arch)
console.log(Process.platform)
console.log(JSON.stringify(Process.mainModule))



Process.enumerateModulesSync()
Process.enumerateModules().forEach(element => {
    console.log(JSON.stringify(element))
});

var baseAddress = Module.findBaseAddress("libMHS.so");
if (baseAddress) {
    console.log("Base Found");

} else {
    console.log("Base NOT Found");
}

try {

    //cMHiParser::getString(cMHiParser *this, const char *a2, MtString *a3, cReceiveNode *a4)
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175A068), {
        onEnter: function (args) {

            console.log("\"", Memory.readCString(args[1]), "\":\"String\"")

        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })

} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175A068")
}
try {
    //cMHiParser::getS64(cMHiParser *this, const char *a2, __int64 *a3, cReceiveNode *a4)

    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175A3E4), {
        onEnter: function (args) {
            console.log("\"", Memory.readCString(args[1]), "\":\"s64\"")

        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })
} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175A3E4")
}
try {
    //cMHiParser::getU64(char const*,ulong &,cReceiveNode *)	.text	000000000175A224
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175A224), {
        onEnter: function (args) {

            console.log("\"", Memory.readCString(args[1]), "\":\"u64\"")


        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })
} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175A224")
}
try {
    //cMHiParser::getArrayString(char const*,cReceiveNode *)	.text	000000000175A810
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175A810), {
        onEnter: function (args) {
            console.log("arrayString Field: ", args[1])

        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })
} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175A810")
}
try {
    //cMHiParser::getArrayS64(char const*,cReceiveNode *)	.text	000000000175AD38
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175AD38), {
        onEnter: function (args) {
            console.log("getArrayS64 Field: ", args[1])

        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })

} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175AD38")
}


try {
    //cMHiParser::findArray(char const*,cReceiveNode *)	.text	000000000175C438
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175C438), {
        onEnter: function (args) {
            console.log("findArray Field: ", Memory.readCString(args[1]))


        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))

        }
    })

} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175C438")
}

try {
    //cMHiParser::findObject(char const*,cReceiveNode *)	.text	000000000175C444
    var interceptor = Interceptor.attach(baseAddress.add(0x000000000175C444), {
        onEnter: function (args) {
            console.log("findObject Field: ", Memory.readCString(args[1]))


        },
        onLeave: function (retVal) {
            console.log("retVal: ", JSON.stringify(retVal))
            console.log("retVal as Text", Memory.readCString(retVal))

        }
    })

} catch (error) {
    console.log(JSON.stringify(error))
    console.error("error attaching 0x000000000175C444")
}




var enabled = false

// try {
//     //sPlayerWorkspace::getEquipData(MtString)	.text	0000000001AA1CD8	0000028C	00000040		R	.	.	.	.	B	T	.    
//     var interceptor = Interceptor.attach(baseAddress.add(0x0000000001AA1CD8), {
//         onEnter: function (args) {
//             enabled = true
//             console.log("getEquipData Field: ", args[0])
//             console.log("getEquipData as Text", Memory.readCString(args[0]))
//             console.log("getEquipData Field: ", args[1])
//             console.log("getEquipData as Text", Memory.readCString(args[1]))

//             console.log("getEquipData Field: ", args[2])
//             console.log("getEquipData as Text", Memory.readCString(args[2]))



//         },
//         onLeave: function (retVal) {
//             console.log("retVal: ", JSON.stringify(retVal))
//             console.log("retVal as Text", Memory.readCString(retVal))


//         }
//     })

// } catch (error) {
//     console.log(JSON.stringify(error))
//     console.error("error attaching 0x0000000001AA1CD8")
// }

// try {
//     //MtCRC::getCRC(char const*,uint)	.text	000000000273CC68	00000038			R	.	.	.	.	.	T	.
//     var interceptor = Interceptor.attach(baseAddress.add(0x000000000273CC68), {
//         onEnter: function (args) {
//             console.log("getCRC Field: ", Memory.readCString(args[0]))


//         },
//         onLeave: function (retVal) {
//             console.log("retVal: ", JSON.stringify(retVal))

//         }
//     })

// } catch (error) {
//     console.log(JSON.stringify(error))
//     console.error("error attaching 0x000000000273CC68")
// }


