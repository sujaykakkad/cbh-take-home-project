# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
| Ticket No | Task | Description | Time/Efforts(in hours) |
| --- | --- | --- | --- |
| F1 | facilities/generateFacilityId | Create a process to generate Facility Agentid whenever a new Agent is registered on Agent Portal UI. | 5 |
| F2 | Testing of `facilities/generateFacilityId` subtask of `F1`  | Manual Unit Testing| 2 | 
| F3 | facilities/mapping |	Process to Insert/Update FacilityAgentid in the Agent table | 5 |
| F4 | Testing of `facilities/mapping` subtask of `F3`	| Manual Unit Testing | 2 |
| F5 |	facilities/generatereport |	Functionality to generate report - using parameter - Facility Agentid | 8 | 
| F6 | Adding sum functionality in generatereport subtask of `F5`	| Functionality to sum up hours for an agent for a shift | 2 |	
| F7 | Testing of `facilities/generatereport` subtask of `F5`	| Manual Unit Testing |	2 |
| F8 |	Test case writing and execution | Test Cases that can be covered for acceptance testing Facilityid, Agentid, FacilityAgentid, Shiftid should be unique and non-null values. One agentid can be mapped only to one facility for one shift at a time. FacilityAgentid generated should always be prefixed with 'F' followed by agentid" | 5 |

