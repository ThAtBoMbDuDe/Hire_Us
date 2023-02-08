Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.synced_folder "../HIRE_US/", "/home/vagrant/HIRE_US"
  config.vm.box_check_update = false
  config.vm.define "MongoDB5"
  config.vm.network "private_network", ip: "192.168.56.10"
  config.vm.provision "shell", path: "./mongodb.sh"
  config.vm.provider "virtualbox" do |v|
    v.memory = 3072
    v.cpus = 4
    v.name = "MongoDB-5"
  end
  config.vm.provision "shell", path: "./node.sh"
  config.vm.provision "shell", path: "./react.sh"
end