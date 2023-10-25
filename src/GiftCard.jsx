import "./giftCard.css";
function GiftCard() {
  return (
    <div>
      <div className="birthday-background-header flex flex-col items-end justify-center pr-12">
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697091378/order-online_hselfz.png"
          alt="order-online content-start"
          className="order-online-img"
        />
      </div>
      <form>
        <div>
          <h1>Birthday Party</h1>
          <p>
            For bookings and Information, Please fill the details below and
            submit or contact your nearest Dough Delights restaurant manager @
            1234-208-1234
          </p>
        </div>
        <input type="text" placeholder="Name" name="Name" />
        <input type="tel" placeholder="Mobile Number" name="Mobile Number" />
        <input
          type="tel"
          placeholder="Alternate Number"
          name="Alternate Number"
        />
        <input type="date" placeholder="Date of Birth" name="Date of Birth" />
        <input
          type="date"
          placeholder="Anniversary Date"
          name="Anniversary Date"
        />
        <input type="text" placeholder="Address" name="Address" />
        <select
          className="form-select form-select-sm "
          aria-label="Small select example"
          name="City"
        >
          <option selected>CITY*</option>
          <option value="AHMEDABAD">AHMEDABAD</option>
          <option value="BANGALORE">BANGALORE</option>
          <option value="CHENNAI">BANGALORE</option>
          <option value="DELHI">DELHI</option>
          <option value="HYDERABAD">HYDERABAD</option>
          <option value="MUMBAI">MUMBAI</option>
        </select>
        <select
          className="form-select form-select-sm "
          aria-label="Small select example"
        >
          <option selected>Restaurant Name</option>
          <option value="AHMEDABAD 3 R WORLD, GUJARAT">
            AHMEDABAD 3 R WORLD, GUJARAT
          </option>
          <option value="HIMALAYA MALL, AHMEDABAD, GUJARAT">
            HIMALAYA MALL, AHMEDABAD, GUJARAT
          </option>
          <option value="MARUTI PLAZA, AHMEDABAD, GUJARAT">
            MARUTI PLAZA, AHMEDABAD, GUJARAT
          </option>
          <option value="PALLADIUM MALL, AHMEDABAD, GUJARAT">
            PALLADIUM MALL, AHMEDABAD, GUJARAT
          </option>
          <option value="SAVVY SWARAAJ, AHMEDABAD, GUJARAT">
            SAVVY SWARAAJ, AHMEDABAD, GUJARAT
          </option>
          <option value="ANEKAL TOWN, BANGALORE, KARNATAKA">
            ANEKAL TOWN, BANGALORE, KARNATAKA
          </option>
          <option value="AYYAPPA NAGAR, BANGALORE, KARNATAKA">
            AYYAPPA NAGAR, BANGALORE, KARNATAKA
          </option>
          <option value="CHANDAPURA, BANGALORE, KARNATAKA">
            CHANDAPURA, BANGALORE, KARNATAKA
          </option>
          <option value="CHANNASANDRA VILLAGE, BANGALORE, KARNATAKA">
            CHANNASANDRA VILLAGE, BANGALORE, KARNATAKA
          </option>
          <option value="HOSKOTE TOWN, BANGALORE, KARNATAKA">
            HOSKOTE TOWN, BANGALORE, KARNATAKA
          </option>
          <option value="">K R PURAM, BANGALORE, KARNATAKA</option>
          <option value="AERO HUB, CHENNAI, TAMILNADU">
            AERO HUB, CHENNAI, TAMILNADU
          </option>
          <option value="BESANT NAGAR, CHENNAI, TAMILNADU">
            BESANT NAGAR, CHENNAI, TAMILNADU
          </option>
          <option value="CHINMAYA NAGAR, CHENNAI, TAMILNADU">
            CHINMAYA NAGAR, CHENNAI, TAMILNADU
          </option>
          <option value="EGATTUR VILLAGE, CHENNAI, TAMILNADU">
            EGATTUR VILLAGE, CHENNAI, TAMILNADU
          </option>
          <option value="KONNUR HIGH ROAD, CHENNAI, TAMILNADU">
            KONNUR HIGH ROAD, CHENNAI, TAMILNADU
          </option>
          <option value="RAM NAGAR, CHENNAI, TAMILNADU">
            RAM NAGAR, CHENNAI, TAMILNADU
          </option>
          <option value="BEERAM GUDA, HYDERABAD, TELANGANA">
            BEERAM GUDA, HYDERABAD, TELANGANA
          </option>
          <option value="HITECH CITY, HYDERABAD, TELANGANA">
            HITECH CITY, HYDERABAD, TELANGANA
          </option>
          <option value="GACHIBOWLI, HYDERABAD, TELANGANA">
            GACHIBOWLI, HYDERABAD, TELANGANA
          </option>
          <option value="MADHAPUR, HYDERABAD, TELANGANA">
            MADHAPUR, HYDERABAD, TELANGANA
          </option>
          <option value="PATANCHERU, HYDERABAD, TELANGANA">
            PATANCHERU, HYDERABAD, TELANGANA
          </option>
          <option value="ANDERI EAST, MUMBAI, MAHARASTRA">
            ANDERI EAST, MUMBAI, MAHARASTRA
          </option>
          <option value="BANDRA EAST, MUMBAI, MAHARASTRA">
            BANDRA EAST, MUMBAI, MAHARASTRA
          </option>
          <option value="BORIVALI EAST, MUMBAI, MAHARASTRA">
            BORIVALI EAST, MUMBAI, MAHARASTRA
          </option>
          <option value="LAL BAUGH, MUMBAI, MAHARASTRA">
            LAL BAUGH, MUMBAI, MAHARASTRA
          </option>
          <option value="MG ROAD KANDIWALI EAST, MUMBAI, MAHARASTRA">
            MG ROAD KANDIWALI EAST, MUMBAI, MAHARASTRA
          </option>
        </select>
        <input type="text" placeholder="Pin code" name="Pin code" />
      </form>
    </div>
  );
}

export default GiftCard;
