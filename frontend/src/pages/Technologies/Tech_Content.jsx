import React from "react";
import hardware_security from "../../assets/img/technologies/hardware_security.svg";
import immutable from "../../assets/img/technologies/immutable.svg";
import privacy from "../../assets/img/technologies/privacy.svg";
import settings from "../../assets/img/technologies/settings.svg";
import threat from "../../assets/img/technologies/threat.svg";
const Tech_Content = () => {
  return (
    <>
      <div className="technology_section">
        <h1>Key Technolgies</h1>
        <p className="tech-content">
          Built on cutting-edge cryptographic and distributed systems that
          deliver enterprise-grade security without compromising performance.
        </p>
        <div className="tech-cards">
          <div className="card-details">
            <div className="card_image">
              <img src={hardware_security} alt="" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-point">Hardware Security</span>
              <h4 className="card-heading">
                Secure Enclaves / Confidential Computing
              </h4>
              <p className="card-content-text">
                Hardware-level isolation for 'data in use' protection. Your data
                never leaves the secure environment.
              </p>
            </div>
          </div>
          <div className="card-details">
            <div className="card_image">
              <img src={immutable} alt="" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-point">Immutable Records</span>
              <h4 className="card-heading">Blockchain Ledger</h4>
              <p className="card-content-text">
                Immutable, tamper-proof audit log for all AI compliance events.
                Every action is permanently recorded.
              </p>
            </div>
          </div>
          <div className="card-details">
            <div className="card_image">
              <img src={privacy} alt="" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-point">Privacy-Preserving</span>
              <h4 className="card-heading">Zero-Knowledge Proofs (ZKPs)</h4>
              <p className="card-content-text">
                Cryptographic proofs that policies were enforced without
                exposing private data to any party.
              </p>
            </div>
          </div>
          <div className="card-details">
            <div className="card_image">
              <img src={settings} alt="" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-point">Instant Enforcement</span>
              <h4 className="card-heading">Real-Time Policy Engine</h4>
              <p className="card-content-text">
                Enforces corporate and regulatory AI policies in milliseconds,
                preventing violations before they occur.
              </p>
            </div>
          </div>
          <div className="card-details">
            <div className="card_image">
              <img src={threat} alt="" className="card-img" />
            </div>
            <div className="card-content">
              <span className="card-point">Threat Detection</span>
              <h4 className="card-heading">AI Behavior Analytics</h4>
              <p className="card-content-text">
                Detects anomalies, data misuse, and unauthorized AI usage
                through advanced behavioral analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech_Content;
