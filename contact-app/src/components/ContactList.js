import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import { Icon, Menu, Table } from "semantic-ui-react";

const ContactList = (props) => {
  const { addContactHandler, contacts } = props;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [paginatedContacts, setPaginatedContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const mod=contacts?.length % 5;
    const number=Math.floor(contacts?.length / 5);
    if(number===0){
    setNumberOfPages(1);
    }
    else{
      setNumberOfPages(mod===0?number:number+1);
    }
    setPaginatedPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts?.length]);

  const deleteContactHandler = (id) => {
      props.getContactId(id);
  };
  const setPaginatedPage = (pageNumber = 0) => {
    let startingIndex = pageNumber * 5;
    let endIndex = startingIndex + 5;
    const result = contacts?.filter((contact, i) =>
      i >= startingIndex && i < endIndex ? contact : ""
    );
    setPaginatedContacts([...result]);
    setCurrentPage(pageNumber);
  };
  const goPreviousPage = () => {
    if (currentPage >= 1) {
      setPaginatedPage(currentPage - 1);
    }
  };
  const goNextPage = () => {
    if (currentPage < numberOfPages) {
      setPaginatedPage(currentPage + 1);
    }
  };
    // console.log(numberOfPages, currentPage);

  const renderContactList = paginatedContacts?.map?.((contact, i) => {
    return (
      <ContactCard
        contact={contact}
        id={contacts?.indexOf(contact) + 1}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui main">
      {<AddContact addContactHandler={addContactHandler}/>}
      <table className="ui fixed table">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>Id</th>
            <th style={{ width: "15%" }}>Full Name</th>
            <th style={{ width: "18%" }}>Email Address</th>
            <th>Contact Number</th>
            <th>Location</th>
            <th>Registered Date</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
      <div className="ui celled list " style={{ minHeight: "375px" }}>
        {renderContactList}
      </div>
      <Table>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination style={{ alignItems: "center" }}>
                <Menu.Item
                  as="a"
                  icon
                  onClick={goPreviousPage}
                  disabled={currentPage === 0}
                >
                  <Icon name="chevron left" />
                </Menu.Item>

                <span style={{ margin: "0 5px" }}>
                  <b style={{ paddingRight: "3px", paddingLeft: "8px" }}>
                  {currentPage !== numberOfPages? (currentPage * 5)+paginatedContacts?.length : contacts?.length}
                  </b>{" "}
                  of <b style={{ paddingLeft: "3px" }}> {contacts?.length}</b>
                </span>
                <Menu.Item
                  as="a"
                  icon
                  onClick={goNextPage}
                  disabled={(currentPage+1)  === numberOfPages}
                >
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ContactList;
