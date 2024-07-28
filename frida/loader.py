import time

import frida




device = frida.get_device_manager().enumerate_devices()[3]

pid = device.spawn(["jp.co.capcom.android.explore"])
device.resume(pid)

time.sleep(1)  # Without it Java.perform silently fails
# If using emulator like bluestacks use realm="emulated"
session1 = device.attach(pid, realm="emulated")
with open("getFields.js") as f:
    script = session1.create_script(f.read())
script.load()

input()