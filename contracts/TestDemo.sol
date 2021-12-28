// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestDemo is ERC20 {
    address private admin;
    constructor(uint256 _supply) ERC20 ("TestDemo", "TSTD"){
        _mint(msg.sender, _supply * (10 ** decimals()));
        admin = msg.sender;
    }
    
    function mint(address to, uint amount) external {
        require(msg.sender == admin, 'only admin');
        _mint(to, amount);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }

    function changeAdmin(address newAdmin) external {
        require(msg.sender == admin, "caller is not admin");
        admin = newAdmin;
    }
    
    function getAdmin() external view returns (address) {
        require(msg.sender == admin, "caller is not admin"
        return admin;
    }
}
