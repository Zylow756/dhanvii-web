import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';

const Courses = () => {
    return (
        <div className={styles['root']}>
            <Nav />
            <div className="contact-us">
                <h1 style={{ textAlign: 'center', paddingTop: 50, color: 'rgb(128, 108, 108)', marginBottom: '0%' }}>Courses
                </h1>
                <div className="courses-section">
                    <div className="courses-container">
                        <button className="collapsible">Tally Prime [3 months]</button>
                        <div className="content">
                            <h5><strong>Module 1: Special Fundamental &amp; Financial Accounting - Introduction</strong></h5>
                            <p>Basic of Accounting Rules and Sta<span id="dots">...</span><span id="more">ndards Cash
                                Book,Bank Book,Ledger,Journal Register,Sale/Purchase,Trail Balance,Trading &amp; Profit &amp;
                                Loss A/c,Balance sheet etc. Creating of new company,select a company,shut a
                                company,alter a company,delete a company,split company,data backup &amp; restore,ledger &amp;
                                group(single/multiple) create,display,alter,Features &amp; Configure.</span></p>
                            <button onclick="myFunction()" id="myBtn">Read more</button>
                            <h5><strong>Module 2: Transactions Vouchers</strong></h5>
                            <p>Double/Single entry mode,use Cr/<span id="dots">...</span><span id="more">Dr instead of To/By
                                during voucher,contra,payment,receipt,journal,sale,purchase vouchers and
                                configure.</span>
                            </p><p>
                                <button onclick="myFunction()" id="myBtn">Read more</button>
                            </p><h5><strong>Module 3: Inventory Information &amp; Features</strong></h5>
                            <p>Maintain stock items,maintain st<span id="dots">...</span><span id="more">ock units,stock
                                group &amp; stock categories,Sale &amp; Purchase with inventory voucher,Maintain multiple Go
                                down,Use different actual &amp; bill qty.Separate discount column.Purchase &amp; Sales order
                                voucher,receipt and delivery note voucher,rejection out and in voucher,Purchase and
                                Sales with invoice mode,Debit &amp; Credit note Voucher.</span></p>
                            <button onclick="myFunction()" id="myBtn">Read more</button>
                            <h5><strong>Module 4: Statuary &amp; Taxations GST</strong></h5>
                            <p>Enable GST in Tally Prime,Set/al<span id="dots">...</span><span id="more">ter GST
                                details,Create purchase &amp; sales invoice with CGST and SGST OR IGST,Adjustment of input &amp;
                                output GST,HSN Code,GST payment,GSTR1,R2,B3 &amp; Challan reconciliation,E-way bills,GST
                                Annual Computation,GST Rate setup,Map Uom-UQC,Update Party GSTIN.</span></p>
                            <button onclick="myFunction()" id="myBtn">Read more</button>
                            <h5><strong>Module 5: View Reports</strong></h5>
                            <p>Trial Balance,Day book,Account b<span id="dots">...</span><span id="more">ook,Cash/Bank
                                Book,Purchase/Sale Register,Profit &amp; Loss Account,Balance sheet,cheque register,Bank
                                reconciliation,Stock Summary,Master and voucher statistics.</span></p>
                            <button onclick="myFunction()" id="myBtn">Read more</button>
                        </div>
                        <button className="collapsible">Beginner Accounting [6 months]</button>
                        <div className="content">
                            <h5><strong>Part A - Financial Accounting [Manual Accounting]</strong></h5>
                            <h6>Module A - Principles &amp; Rules of Accounting</h6>
                            <h6>Module B - Bookkeeping &amp; Practice</h6>
                            <h6>Module C - Stock &amp; Inventory Maintenance</h6>
                            <h6>Module D - Goods &amp; Service Tax[GST]</h6>
                            <h6>Module E - Soft Skill Development</h6>
                            <h6>Module F - Office Documentation &amp; Record Management</h6>
                            <h6>Module G - Banking Operation</h6>
                            <h5><strong>Part B - Computerized Accounting [Tally Prime]</strong></h5>
                            <h6>Module - 1: Special Fundamental &amp; Financial Accounting</h6>
                            <h6>Module - 2: Transactions Vouchers</h6>
                            <h6>Module - 3: Inventory Information &amp; Features</h6>
                            <h6>Module - 4: Statuary &amp; Taxations GST</h6>
                            <h6>Module - 5: View Reports</h6>
                            <h6>Extra - Banking &amp; Accounting in MS Excel</h6>
                        </div>
                        <button className="collapsible">Achiever's Accounting [8 months]</button>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <button className="collapsible">Advance in Accounting[12 months]</button>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default Courses;