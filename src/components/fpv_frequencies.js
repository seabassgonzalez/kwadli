import React, { Component } from 'react';
import { connect } from 'react-redux';

const FREQUENCY_BANDS = {
  A: {
    name: 'Band A',
    channels: [
      { channel: 1, frequency: 5865 },
      { channel: 2, frequency: 5845 },
      { channel: 3, frequency: 5825 },
      { channel: 4, frequency: 5805 },
      { channel: 5, frequency: 5785 },
      { channel: 6, frequency: 5765 },
      { channel: 7, frequency: 5745 },
      { channel: 8, frequency: 5725 }
    ]
  },
  B: {
    name: 'Band B',
    channels: [
      { channel: 1, frequency: 5733 },
      { channel: 2, frequency: 5752 },
      { channel: 3, frequency: 5771 },
      { channel: 4, frequency: 5790 },
      { channel: 5, frequency: 5809 },
      { channel: 6, frequency: 5828 },
      { channel: 7, frequency: 5847 },
      { channel: 8, frequency: 5866 }
    ]
  },
  E: {
    name: 'Band E',
    channels: [
      { channel: 1, frequency: 5705 },
      { channel: 2, frequency: 5685 },
      { channel: 3, frequency: 5665 },
      { channel: 4, frequency: 5645 },
      { channel: 5, frequency: 5885 },
      { channel: 6, frequency: 5905 },
      { channel: 7, frequency: 5925 },
      { channel: 8, frequency: 5945 }
    ]
  },
  F: {
    name: 'Band F',
    channels: [
      { channel: 1, frequency: 5740 },
      { channel: 2, frequency: 5760 },
      { channel: 3, frequency: 5780 },
      { channel: 4, frequency: 5800 },
      { channel: 5, frequency: 5820 },
      { channel: 6, frequency: 5840 },
      { channel: 7, frequency: 5860 },
      { channel: 8, frequency: 5880 }
    ]
  },
  R: {
    name: 'Race Band',
    channels: [
      { channel: 1, frequency: 5658 },
      { channel: 2, frequency: 5695 },
      { channel: 3, frequency: 5732 },
      { channel: 4, frequency: 5769 },
      { channel: 5, frequency: 5806 },
      { channel: 6, frequency: 5843 },
      { channel: 7, frequency: 5880 },
      { channel: 8, frequency: 5917 }
    ]
  },
  DJI25: {
    name: 'DJI 25Mb',
    channels: [
      { channel: 1, frequency: 5660 },
      { channel: 2, frequency: 5700 },
      { channel: 3, frequency: 5745 },
      { channel: 4, frequency: 5785 },
      { channel: 5, frequency: 5825 },
      { channel: 6, frequency: 5865 },
      { channel: 7, frequency: 5905 },
      { channel: 8, frequency: 5945 }
    ]
  },
  DJI50: {
    name: 'DJI 50Mb',
    channels: [
      { channel: 1, frequency: 5660 },
      { channel: 2, frequency: 5700 },
      { channel: 3, frequency: 5745 },
      { channel: 4, frequency: 5785 },
      { channel: 5, frequency: 5825 },
      { channel: 6, frequency: 5865 },
      { channel: 7, frequency: 5905 },
      { channel: 8, frequency: 5945 }
    ]
  },
  HDZ: {
    name: 'HDZero',
    channels: [
      { channel: 1, frequency: 5653 },
      { channel: 2, frequency: 5693 },
      { channel: 3, frequency: 5733 },
      { channel: 4, frequency: 5773 },
      { channel: 5, frequency: 5813 },
      { channel: 6, frequency: 5853 },
      { channel: 7, frequency: 5893 },
      { channel: 8, frequency: 5933 }
    ]
  }
};

const IMD_THRESHOLD = 35;

class FPVFrequencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilots: [],
      selectedBand: 'R',
      selectedChannel: '1',
      pilotName: '',
      showRecommendation: false,
      recommendation: null
    };
  }

  calculateIMD(freq1, freq2) {
    const imd1 = 2 * freq1 - freq2;
    const imd2 = 2 * freq2 - freq1;
    return [imd1, imd2];
  }

  checkInterference(newFreq, existingFreqs) {
    const issues = [];
    
    existingFreqs.forEach(pilot => {
      const freqDiff = Math.abs(newFreq - pilot.frequency);
      
      if (freqDiff < 20) {
        issues.push({
          type: 'direct',
          pilot: pilot.name,
          severity: 'high',
          message: `Too close to ${pilot.name}'s frequency (${pilot.frequency} MHz)`
        });
      } else if (freqDiff < IMD_THRESHOLD) {
        issues.push({
          type: 'proximity',
          pilot: pilot.name,
          severity: 'medium',
          message: `Close proximity to ${pilot.name}'s frequency (${pilot.frequency} MHz)`
        });
      }
      
      const [imd1, imd2] = this.calculateIMD(newFreq, pilot.frequency);
      existingFreqs.forEach(otherPilot => {
        if (Math.abs(otherPilot.frequency - imd1) < 10 || Math.abs(otherPilot.frequency - imd2) < 10) {
          issues.push({
            type: 'imd',
            pilot: pilot.name,
            severity: 'medium',
            message: `IMD interference with ${pilot.name} affecting ${otherPilot.name}`
          });
        }
      });
    });
    
    return issues;
  }

  findBestChannel() {
    const { pilots } = this.state;
    let bestOption = null;
    let minInterference = Infinity;
    
    Object.keys(FREQUENCY_BANDS).forEach(band => {
      FREQUENCY_BANDS[band].channels.forEach(channel => {
        const issues = this.checkInterference(channel.frequency, pilots);
        const score = issues.reduce((sum, issue) => 
          sum + (issue.severity === 'high' ? 10 : issue.severity === 'medium' ? 5 : 1), 0
        );
        
        if (score < minInterference) {
          minInterference = score;
          bestOption = {
            band,
            channel: channel.channel,
            frequency: channel.frequency,
            issues
          };
        }
      });
    });
    
    return bestOption;
  }

  handleAddPilot = (e) => {
    e.preventDefault();
    const { selectedBand, selectedChannel, pilotName } = this.state;
    
    if (!pilotName.trim()) {
      alert('Please enter a pilot name');
      return;
    }
    
    const channelData = FREQUENCY_BANDS[selectedBand].channels.find(
      ch => ch.channel === parseInt(selectedChannel)
    );
    
    const newPilot = {
      id: Date.now(),
      name: pilotName,
      band: selectedBand,
      channel: parseInt(selectedChannel),
      frequency: channelData.frequency,
      issues: []
    };
    
    const issues = this.checkInterference(newPilot.frequency, this.state.pilots);
    newPilot.issues = issues;
    
    if (issues.some(issue => issue.severity === 'high')) {
      const recommendation = this.findBestChannel();
      this.setState({
        showRecommendation: true,
        recommendation: {
          ...recommendation,
          currentPilot: newPilot
        }
      });
    } else {
      this.setState({
        pilots: [...this.state.pilots, newPilot],
        pilotName: '',
        showRecommendation: false
      });
    }
  };

  acceptRecommendation = () => {
    const { recommendation } = this.state;
    const newPilot = {
      ...recommendation.currentPilot,
      band: recommendation.band,
      channel: recommendation.channel,
      frequency: recommendation.frequency,
      issues: recommendation.issues
    };
    
    this.setState({
      pilots: [...this.state.pilots, newPilot],
      pilotName: '',
      showRecommendation: false,
      recommendation: null
    });
  };

  forceAdd = () => {
    const { recommendation } = this.state;
    this.setState({
      pilots: [...this.state.pilots, recommendation.currentPilot],
      pilotName: '',
      showRecommendation: false,
      recommendation: null
    });
  };

  removePilot = (id) => {
    this.setState({
      pilots: this.state.pilots.filter(pilot => pilot.id !== id)
    });
  };

  renderFrequencySpectrum() {
    const { pilots } = this.state;
    const minFreq = 5645;
    const maxFreq = 5945;
    const spectrumWidth = 100;
    
    return (
      <div className="frequency-spectrum">
        <h3>Frequency Spectrum Visualization</h3>
        <div className="spectrum-container">
          <div className="spectrum-bar">
            {pilots.map(pilot => {
              const position = ((pilot.frequency - minFreq) / (maxFreq - minFreq)) * spectrumWidth;
              const hasIssues = pilot.issues.some(issue => issue.severity === 'high');
              
              return (
                <div
                  key={pilot.id}
                  className={`pilot-marker ${hasIssues ? 'has-issues' : ''}`}
                  style={{ left: `${position}%` }}
                  title={`${pilot.name}: ${pilot.frequency} MHz`}
                >
                  <div className="pilot-label">{pilot.name}</div>
                </div>
              );
            })}
          </div>
          <div className="spectrum-labels">
            <span>{minFreq} MHz</span>
            <span>{maxFreq} MHz</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { pilots, selectedBand, selectedChannel, pilotName, showRecommendation, recommendation } = this.state;
    
    return (
      <div className="fpv-frequencies">
        <h1>FPV Frequencies Management</h1>
        
        <div className="frequency-form">
          <h2>Add Pilot Frequency</h2>
          <form onSubmit={this.handleAddPilot}>
            <div className="form-group">
              <label>Pilot Name:</label>
              <input
                type="text"
                value={pilotName}
                onChange={(e) => this.setState({ pilotName: e.target.value })}
                placeholder="Enter pilot name"
              />
            </div>
            
            <div className="form-group">
              <label>Band:</label>
              <select
                value={selectedBand}
                onChange={(e) => this.setState({ selectedBand: e.target.value })}
              >
                {Object.keys(FREQUENCY_BANDS).map(band => (
                  <option key={band} value={band}>
                    {FREQUENCY_BANDS[band].name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Channel:</label>
              <select
                value={selectedChannel}
                onChange={(e) => this.setState({ selectedChannel: e.target.value })}
              >
                {FREQUENCY_BANDS[selectedBand].channels.map(ch => (
                  <option key={ch.channel} value={ch.channel}>
                    Channel {ch.channel} ({ch.frequency} MHz)
                  </option>
                ))}
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Add Pilot</button>
          </form>
        </div>
        
        {showRecommendation && recommendation && (
          <div className="recommendation-modal">
            <div className="modal-content">
              <h3>Frequency Conflict Detected!</h3>
              <p>
                {recommendation.currentPilot.name}'s selected frequency 
                ({recommendation.currentPilot.frequency} MHz) has interference issues.
              </p>
              <div className="issues-list">
                {recommendation.currentPilot.issues.map((issue, idx) => (
                  <div key={idx} className={`issue ${issue.severity}`}>
                    {issue.message}
                  </div>
                ))}
              </div>
              <h4>Recommended Channel:</h4>
              <p>
                {FREQUENCY_BANDS[recommendation.band].name} - 
                Channel {recommendation.channel} ({recommendation.frequency} MHz)
              </p>
              <div className="modal-actions">
                <button onClick={this.acceptRecommendation} className="btn btn-success">
                  Accept Recommendation
                </button>
                <button onClick={this.forceAdd} className="btn btn-warning">
                  Use Original (Not Recommended)
                </button>
              </div>
            </div>
          </div>
        )}
        
        {this.renderFrequencySpectrum()}
        
        <div className="pilots-list">
          <h2>Active Pilots</h2>
          {pilots.length === 0 ? (
            <p>No pilots added yet</p>
          ) : (
            <table className="pilots-table">
              <thead>
                <tr>
                  <th>Pilot</th>
                  <th>Band</th>
                  <th>Channel</th>
                  <th>Frequency</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pilots.map(pilot => (
                  <tr key={pilot.id}>
                    <td>{pilot.name}</td>
                    <td>{FREQUENCY_BANDS[pilot.band].name}</td>
                    <td>{pilot.channel}</td>
                    <td>{pilot.frequency} MHz</td>
                    <td>
                      {pilot.issues.length === 0 ? (
                        <span className="status-good">Clear</span>
                      ) : (
                        <span className="status-warning">
                          {pilot.issues.filter(i => i.severity === 'high').length} conflicts
                        </span>
                      )}
                    </td>
                    <td>
                      <button 
                        onClick={() => this.removePilot(pilot.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default FPVFrequencies;