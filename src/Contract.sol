// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Document {
    struct ChildDetails {
        string child_name;
        string child_father_name;
        string child_mother_name;
        string birth_date;
        string birth_location;
        address issuedFrom;
    }

    struct GraduationDetails {
        string student_name;
        string date_of_birth;
        string date_of_graduation;
        string degree;
        address issued_from;
    }
    
    mapping(address => GraduationDetails[]) public graduateRecords;
    mapping(address => ChildDetails[]) public childRecords;
    
    function addChildDetails(
        address _address,
        string memory _child_name,
        string memory _child_father_name,
        string memory _child_mother_name,
        string memory _birth_date,
        string memory _birth_location
    ) public {
        require(!isExistingChild(_address, _child_name, _birth_date), "Child details already exist");
        
        ChildDetails memory newChild = ChildDetails({
            child_name: _child_name,
            child_father_name: _child_father_name,
            child_mother_name: _child_mother_name,
            birth_date: _birth_date,
            birth_location: _birth_location,
            issuedFrom: msg.sender
        });
        childRecords[_address].push(newChild); 
    }

    function addGraduationDetails(
        address _address,
        string memory _student_name,
        string memory _date_of_birth,
        string memory _date_of_graduation,
        string memory _degree
    ) public {
        require(!isExistingGraduate(_address, _student_name, _date_of_birth), "Graduation details already exist");
        
        GraduationDetails memory newGraduate = GraduationDetails({
            student_name: _student_name,
            date_of_birth: _date_of_birth,
            date_of_graduation: _date_of_graduation,
            degree: _degree,
            issued_from: msg.sender
        });
        graduateRecords[_address].push(newGraduate); 
    }
    
    function isExistingChild(
        address _address,
        string memory _child_name,
        string memory _birth_date
    ) internal view returns (bool) {
        ChildDetails[] memory children = childRecords[_address];
        for (uint256 i = 0; i < children.length; i++) {
            if (
                keccak256(abi.encodePacked(children[i].child_name)) == keccak256(abi.encodePacked(_child_name)) &&
                keccak256(abi.encodePacked(children[i].birth_date)) == keccak256(abi.encodePacked(_birth_date))
            ) {
                return true;
            }
        }
        return false;
    }

    function verifyChildDetails(
        address _address,
        string memory _child_name,
        string memory _birth_date,
        string memory _birth_location
    ) public view returns (bool) {
        ChildDetails[] memory children = childRecords[_address];
        for (uint256 i = 0; i < children.length; i++) {
            if (
                keccak256(abi.encodePacked(children[i].child_name)) == keccak256(abi.encodePacked(_child_name)) &&
                keccak256(abi.encodePacked(children[i].birth_date)) == keccak256(abi.encodePacked(_birth_date)) &&
                keccak256(abi.encodePacked(children[i].birth_location)) == keccak256(abi.encodePacked(_birth_location))
            ) {
                return true;
            }
        }
        return false;
    }

    function isExistingGraduate(
        address _address,
        string memory _student_name,
        string memory _date_of_birth
    ) internal view returns (bool) {
        GraduationDetails[] memory graduates = graduateRecords[_address];
        for (uint256 i = 0; i < graduates.length; i++) {
            if (
                keccak256(abi.encodePacked(graduates[i].student_name)) == keccak256(abi.encodePacked(_student_name)) &&
                keccak256(abi.encodePacked(graduates[i].date_of_birth)) == keccak256(abi.encodePacked(_date_of_birth))
            ) {
                return true;
            }
        }
        return false;
    }

    function verifyGraduationDetails(
        address _address,
        string memory _student_name,
        string memory _date_of_birth,
        string memory _date_of_graduation,
        string memory _degree
    ) public view returns (bool) {
        GraduationDetails[] memory graduates = graduateRecords[_address];
        for (uint256 i = 0; i < graduates.length; i++) {
            if (
                keccak256(abi.encodePacked(graduates[i].student_name)) == keccak256(abi.encodePacked(_student_name)) &&
                keccak256(abi.encodePacked(graduates[i].date_of_birth)) == keccak256(abi.encodePacked(_date_of_birth)) &&
                keccak256(abi.encodePacked(graduates[i].date_of_graduation)) == keccak256(abi.encodePacked(_date_of_graduation)) &&
                keccak256(abi.encodePacked(graduates[i].degree)) == keccak256(abi.encodePacked(_degree))
            ) {
                return true;
            }
        }
        return false;
    }
    
    function getChildCount(address _address) public view returns (uint) {
        return childRecords[_address].length;
    }

    function getGraduateCount(address _address) public view returns (uint) {
        return graduateRecords[_address].length;
    }
}
