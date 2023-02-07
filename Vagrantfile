Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.box_check_update = false
  config.vm.define "MongoDB5"
  config.vm.network "public_network"
  config.vm.provision "shell", path: "./mongodb.sh"
  config.vm.provider "virtualbox" do |v|
    v.memory = 3072
    v.cpus = 1
    v.name = "MongoDB-5"
  end
  config.vm.provision "shell", path: "./node.sh"
  config.vm.provision "shell", path: "./react.sh"
end