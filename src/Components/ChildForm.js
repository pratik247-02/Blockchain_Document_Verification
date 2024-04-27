const ChildForm = (props) => {
    return(
        <div>
            <form onSubmit={props.setChildData}>
                <input type="text" name="Child_Name" id="Child_Name" placeholder="Child Name"/>
                <input type="text" name="Father_Name" id="Father_Name" placeholder="Father Name"/>
                <input type="text" name="Mother_Name" id="Mother_Name" placeholder="Mother Name"/>
                <input type="text" name="Birth_Date" id="Birth_Date" placeholder="Birth Date"/>
                <input type="text" name="Birth_Location" id="Birth_Location" placeholder="Birth Loction"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ChildForm;