package com.psbc.pojo;

public class User {
    private Integer id;

    private String workunitselect;

    /**
     * ҵ������
     * 1. �����
     * 2. ���Ŵ�
     */
    private String loanType;

    /**
     * �����: ��ҵ��Ϣ��һ����
     */
    private String workunit;
    /**
     * �����: ��ҵ��Ϣ��������
     */
    private String workunit2;

    /**
     * �����: �Ƿ�Ϊ������
     */
    private String localPerson;
    /**
     * �����:�����Ƿ��з���
     */
    private String house;
    /**
     * �����: ������
     */
    private String loannum;

    private String job;
    /**
     * �����: �����۶�
     */
    private String income;

    /**
     * �����: ������ʽ
     */
    private String guaranteeType;

    private String loanhouse;

    private String loancar;

    private String loanconsumer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWorkunitselect() {
        return workunitselect;
    }

    public void setWorkunitselect(String workunitselect) {
        this.workunitselect = workunitselect == null ? null : workunitselect.trim();
    }

    public String getWorkunit() {
        return workunit;
    }

    public void setWorkunit(String workunit) {
        this.workunit = workunit == null ? null : workunit.trim();
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house == null ? null : house.trim();
    }

    public String getLoannum() {
        return loannum;
    }

    public void setLoannum(String loannum) {
        this.loannum = loannum == null ? null : loannum.trim();
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job == null ? null : job.trim();
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income == null ? null : income.trim();
    }

    public String getLoanhouse() {
        return loanhouse;
    }

    public void setLoanhouse(String loanhouse) {
        this.loanhouse = loanhouse == null ? null : loanhouse.trim();
    }

    public String getLoancar() {
        return loancar;
    }

    public void setLoancar(String loancar) {
        this.loancar = loancar == null ? null : loancar.trim();
    }

    public String getLoanconsumer() {
        return loanconsumer;
    }

    public void setLoanconsumer(String loanconsumer) {
        this.loanconsumer = loanconsumer == null ? null : loanconsumer.trim();
    }

    public String getWorkunit2() {
        return workunit2;
    }

    public void setWorkunit2(String workunit2) {
        this.workunit2 = workunit2 == null ? null : workunit2.trim();
    }

    public String getLocalPerson() {
        return localPerson;
    }

    public void setLocalPerson(String localPerson) {
        this.localPerson = localPerson == null ? null : localPerson.trim();
    }

    public String getGuaranteeType() {
        return guaranteeType;
    }

    public void setGuaranteeType(String guaranteeType) {
        this.guaranteeType = guaranteeType == null ? null : guaranteeType.trim();


    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }
}