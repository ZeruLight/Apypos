import time
import frida

output_file_path = "output.txt"
output_file = open(output_file_path, "w")

def write_to_file(text):
    output_file.write(text + "\n")
    output_file.flush()

device = frida.get_device_manager().enumerate_devices()[3]

pid = device.spawn(["jp.co.capcom.android.explore"])
device.resume(pid)

time.sleep(1) # Without it Java.perform silently fails

# Attach to the process session
# If using emulator like bluestacks use realm="emulated"
session1 = device.attach(pid, realm="emulated")

with open("./frida/getFields.js") as f:
    script = session1.create_script(f.read())

def on_message(message, data):
    write_to_file(str(message))
    print(message)

script.on('message', on_message)
script.load()

input()

output_file.close()
